import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicySummary } from "./policysummary";



export class ListPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyList", elemType: PolicySummary })
  policyList?: PolicySummary[];
}
