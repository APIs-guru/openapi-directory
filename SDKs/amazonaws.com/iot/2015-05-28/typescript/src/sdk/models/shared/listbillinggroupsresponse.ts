import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";



export class ListBillingGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingGroups", elemType: GroupNameAndArn })
  billingGroups?: GroupNameAndArn[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
