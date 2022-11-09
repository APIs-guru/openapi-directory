import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeshStatusCodeEnum } from "./meshstatuscodeenum";


// MeshStatus
/** 
 * An object that represents the status of a service mesh.
**/
export class MeshStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: MeshStatusCodeEnum;
}
