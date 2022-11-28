import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeshStatusCodeEnum } from "./meshstatuscodeenum";



// MeshStatus
/** 
 * An object that represents the status of a service mesh.
**/
export class MeshStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MeshStatusCodeEnum;
}
