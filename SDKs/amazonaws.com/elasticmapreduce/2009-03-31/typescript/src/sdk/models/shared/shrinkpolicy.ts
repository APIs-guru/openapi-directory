import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceResizePolicy } from "./instanceresizepolicy";


// ShrinkPolicy
/** 
 * Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
**/
export class ShrinkPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=DecommissionTimeout" })
  decommissionTimeout?: number;

  @Metadata({ data: "json, name=InstanceResizePolicy" })
  instanceResizePolicy?: InstanceResizePolicy;
}
