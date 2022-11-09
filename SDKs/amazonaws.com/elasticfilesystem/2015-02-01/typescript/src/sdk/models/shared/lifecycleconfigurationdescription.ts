import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LifecyclePolicy } from "./lifecyclepolicy";


export class LifecycleConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=LifecyclePolicies", elemType: shared.LifecyclePolicy })
  lifecyclePolicies?: LifecyclePolicy[];
}
