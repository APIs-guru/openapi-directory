import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveAutoTerminationPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
