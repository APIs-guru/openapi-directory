import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFrontOriginAccessIdentity } from "./cloudfrontoriginaccessidentity";



// CreateCloudFrontOriginAccessIdentityResult
/** 
 * The returned result of the corresponding request.
**/
export class CreateCloudFrontOriginAccessIdentityResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
}
