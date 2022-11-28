import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyGeneration } from "./policygeneration";



export class ListPolicyGenerationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policyGenerations", elemType: PolicyGeneration })
  policyGenerations: PolicyGeneration[];
}
