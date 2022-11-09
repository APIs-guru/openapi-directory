import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationResourceDetailedStatusEnum } from "./organizationresourcedetailedstatusenum";


// OrganizationResourceDetailedStatusFilters
/** 
 * Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
**/
export class OrganizationResourceDetailedStatusFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: OrganizationResourceDetailedStatusEnum;
}
