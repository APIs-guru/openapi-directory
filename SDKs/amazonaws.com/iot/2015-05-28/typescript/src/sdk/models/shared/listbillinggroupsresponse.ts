import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupNameAndArn } from "./groupnameandarn";


export class ListBillingGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingGroups", elemType: shared.GroupNameAndArn })
  billingGroups?: GroupNameAndArn[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
