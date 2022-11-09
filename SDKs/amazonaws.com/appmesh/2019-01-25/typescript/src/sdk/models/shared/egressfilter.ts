import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EgressFilterTypeEnum } from "./egressfiltertypeenum";


// EgressFilter
/** 
 * An object that represents the egress filter rules for a service mesh.
**/
export class EgressFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: EgressFilterTypeEnum;
}
