import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAutoTerminationPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
