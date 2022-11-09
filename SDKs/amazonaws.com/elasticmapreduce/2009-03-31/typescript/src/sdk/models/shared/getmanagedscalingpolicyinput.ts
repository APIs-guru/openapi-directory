import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetManagedScalingPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
