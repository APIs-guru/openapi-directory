import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicy } from "./lifecyclepolicy";



export class LifecycleConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LifecyclePolicies", elemType: LifecyclePolicy })
  lifecyclePolicies?: LifecyclePolicy[];
}
