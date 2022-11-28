import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecycleHook } from "./lifecyclehook";



export class DescribeLifecycleHooksAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LifecycleHook })
  lifecycleHooks?: LifecycleHook[];
}
