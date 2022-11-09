import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedScalingPolicy } from "./managedscalingpolicy";


export class PutManagedScalingPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=ManagedScalingPolicy" })
  managedScalingPolicy: ManagedScalingPolicy;
}
