import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PermissionsBoundaryDecisionDetail
/** 
 * Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity.
**/
export class PermissionsBoundaryDecisionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedByPermissionsBoundary?: boolean;
}
