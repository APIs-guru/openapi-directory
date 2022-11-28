import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EgressFilterTypeEnum } from "./egressfiltertypeenum";



// EgressFilter
/** 
 * An object that represents the egress filter rules for a service mesh.
**/
export class EgressFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EgressFilterTypeEnum;
}
