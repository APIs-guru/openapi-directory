import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAutoTerminationPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
