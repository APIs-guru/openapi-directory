import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceResizePolicy } from "./instanceresizepolicy";



// ShrinkPolicy
/** 
 * Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
**/
export class ShrinkPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DecommissionTimeout" })
  decommissionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceResizePolicy" })
  instanceResizePolicy?: InstanceResizePolicy;
}
