import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationEnum } from "./operationenum";


// RecordPatch
/** 
 * An update operation for a record.
**/
export class RecordPatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceLastModifiedDate" })
  deviceLastModifiedDate?: Date;

  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Op" })
  op: OperationEnum;

  @Metadata({ data: "json, name=SyncCount" })
  syncCount: number;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
