import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedScalingPolicy } from "./managedscalingpolicy";



export class GetManagedScalingPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ManagedScalingPolicy" })
  managedScalingPolicy?: ManagedScalingPolicy;
}
