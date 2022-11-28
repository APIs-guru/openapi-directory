import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociatedRole
/** 
 * Information about the associated IAM roles.
**/
export class AssociatedRole extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associatedRoleArn?: string;

  @SpeakeasyMetadata()
  certificateS3BucketName?: string;

  @SpeakeasyMetadata()
  certificateS3ObjectKey?: string;

  @SpeakeasyMetadata()
  encryptionKmsKeyId?: string;
}
