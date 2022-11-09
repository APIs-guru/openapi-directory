import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyGeneration } from "./policygeneration";


export class ListPolicyGenerationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=policyGenerations", elemType: shared.PolicyGeneration })
  policyGenerations: PolicyGeneration[];
}
