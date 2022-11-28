import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFrontOriginAccessIdentity } from "./cloudfrontoriginaccessidentity";



// GetCloudFrontOriginAccessIdentityResult
/** 
 * The returned result of the corresponding request.
**/
export class GetCloudFrontOriginAccessIdentityResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
}
