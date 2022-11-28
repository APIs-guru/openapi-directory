import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
**/
export declare class S3Storage extends SpeakeasyBase {
    awsAccessKeyId?: string;
    bucket?: string;
    prefix?: string;
    uploadPolicy?: string;
    uploadPolicySignature?: string;
}
