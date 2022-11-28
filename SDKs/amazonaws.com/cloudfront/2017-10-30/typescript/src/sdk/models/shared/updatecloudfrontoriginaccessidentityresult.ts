import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFrontOriginAccessIdentity } from "./cloudfrontoriginaccessidentity";



// UpdateCloudFrontOriginAccessIdentityResult
/** 
 * The returned result of the corresponding request.
**/
export class UpdateCloudFrontOriginAccessIdentityResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
}
