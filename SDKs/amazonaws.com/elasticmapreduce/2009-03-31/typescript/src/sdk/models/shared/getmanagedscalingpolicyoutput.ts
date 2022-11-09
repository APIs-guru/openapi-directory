import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedScalingPolicy } from "./managedscalingpolicy";


export class GetManagedScalingPolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ManagedScalingPolicy" })
  managedScalingPolicy?: ManagedScalingPolicy;
}
