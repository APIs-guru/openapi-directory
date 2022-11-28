import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateEnclaveCertificateIamRoleResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateS3BucketName?: string;

  @SpeakeasyMetadata()
  certificateS3ObjectKey?: string;

  @SpeakeasyMetadata()
  encryptionKmsKeyId?: string;
}
