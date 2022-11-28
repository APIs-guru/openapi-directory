import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedScalingPolicy } from "./managedscalingpolicy";



export class PutManagedScalingPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=ManagedScalingPolicy" })
  managedScalingPolicy: ManagedScalingPolicy;
}
