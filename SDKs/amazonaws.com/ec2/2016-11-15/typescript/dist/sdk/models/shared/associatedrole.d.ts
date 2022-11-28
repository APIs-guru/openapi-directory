import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the associated IAM roles.
**/
export declare class AssociatedRole extends SpeakeasyBase {
    associatedRoleArn?: string;
    certificateS3BucketName?: string;
    certificateS3ObjectKey?: string;
    encryptionKmsKeyId?: string;
}
