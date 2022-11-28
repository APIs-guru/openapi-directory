import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFrontOriginAccessIdentityConfig } from "./cloudfrontoriginaccessidentityconfig";



// GetCloudFrontOriginAccessIdentityConfigResult
/** 
 * The returned result of the corresponding request.
**/
export class GetCloudFrontOriginAccessIdentityConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
}
