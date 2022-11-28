import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationResourceDetailedStatusEnum } from "./organizationresourcedetailedstatusenum";



// OrganizationResourceDetailedStatusFilters
/** 
 * Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
**/
export class OrganizationResourceDetailedStatusFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OrganizationResourceDetailedStatusEnum;
}
