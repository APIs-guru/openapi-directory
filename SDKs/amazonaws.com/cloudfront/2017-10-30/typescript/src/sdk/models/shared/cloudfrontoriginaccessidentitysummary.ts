import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudFrontOriginAccessIdentitySummary
/** 
 * Summary of the information about a CloudFront origin access identity.
**/
export class CloudFrontOriginAccessIdentitySummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  s3CanonicalUserId: string;
}
