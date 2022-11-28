import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Record
/** 
 * The basic data structure of a dataset.
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceLastModifiedDate" })
  deviceLastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SyncCount" })
  syncCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
