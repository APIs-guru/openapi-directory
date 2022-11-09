import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveAutoTerminationPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
