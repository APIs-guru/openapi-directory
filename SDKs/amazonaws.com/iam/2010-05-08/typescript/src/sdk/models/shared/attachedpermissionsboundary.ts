import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionsBoundaryAttachmentTypeEnum } from "./permissionsboundaryattachmenttypeenum";



// AttachedPermissionsBoundary
/** 
 * <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM identities </a> in the <i>IAM User Guide</i>.</p>
**/
export class AttachedPermissionsBoundary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  permissionsBoundaryArn?: string;

  @SpeakeasyMetadata()
  permissionsBoundaryType?: PermissionsBoundaryAttachmentTypeEnum;
}
