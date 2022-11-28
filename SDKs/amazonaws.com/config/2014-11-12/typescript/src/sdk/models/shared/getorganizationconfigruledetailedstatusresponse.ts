import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberAccountStatus } from "./memberaccountstatus";



export class GetOrganizationConfigRuleDetailedStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleDetailedStatus", elemType: MemberAccountStatus })
  organizationConfigRuleDetailedStatus?: MemberAccountStatus[];
}
