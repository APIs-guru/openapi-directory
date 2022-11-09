import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * <p>The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.</p> <p>By default, when no encryption configuration is set or the <code>AES256</code> encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.</p> <p>For more control over the encryption of the contents of your repository, you can use server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
**/
export declare class EncryptionConfiguration extends SpeakeasyBase {
    encryptionType: EncryptionTypeEnum;
    kmsKey?: string;
}
