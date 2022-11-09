import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveManagedScalingPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
