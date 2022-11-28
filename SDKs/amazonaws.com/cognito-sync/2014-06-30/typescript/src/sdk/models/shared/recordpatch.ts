import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationEnum } from "./operationenum";



// RecordPatch
/** 
 * An update operation for a record.
**/
export class RecordPatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceLastModifiedDate" })
  deviceLastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Op" })
  op: OperationEnum;

  @SpeakeasyMetadata({ data: "json, name=SyncCount" })
  syncCount: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
