import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3PublicAccessBlockConfiguration
/** 
 * The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>. 
**/
export class S3PublicAccessBlockConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignorePublicAcls" })
  ignorePublicAcls: boolean;

  @SpeakeasyMetadata({ data: "json, name=restrictPublicBuckets" })
  restrictPublicBuckets: boolean;
}
