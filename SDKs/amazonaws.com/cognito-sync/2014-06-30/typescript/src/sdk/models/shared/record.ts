import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Record
/** 
 * The basic data structure of a dataset.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceLastModifiedDate" })
  deviceLastModifiedDate?: Date;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=SyncCount" })
  syncCount?: number;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
