import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileSystemSize
/** 
 * The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.
**/
export class FileSystemSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: number;

  @SpeakeasyMetadata({ data: "json, name=ValueInIA" })
  valueInIa?: number;

  @SpeakeasyMetadata({ data: "json, name=ValueInStandard" })
  valueInStandard?: number;
}
