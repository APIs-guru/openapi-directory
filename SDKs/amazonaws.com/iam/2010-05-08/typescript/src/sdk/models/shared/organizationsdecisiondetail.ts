import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrganizationsDecisionDetail
/** 
 * Contains information about the effect that Organizations has on a policy simulation.
**/
export class OrganizationsDecisionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedByOrganizations?: boolean;
}
