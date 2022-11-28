import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFrontOriginAccessIdentityConfig } from "./cloudfrontoriginaccessidentityconfig";



// CloudFrontOriginAccessIdentity
/** 
 * CloudFront origin access identity.
**/
export class CloudFrontOriginAccessIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  s3CanonicalUserId: string;
}
