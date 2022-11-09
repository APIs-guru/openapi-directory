import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberAccountStatus } from "./memberaccountstatus";


export class GetOrganizationConfigRuleDetailedStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationConfigRuleDetailedStatus", elemType: shared.MemberAccountStatus })
  organizationConfigRuleDetailedStatus?: MemberAccountStatus[];
}
