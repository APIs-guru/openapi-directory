import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFrontOriginAccessIdentityList } from "./cloudfrontoriginaccessidentitylist";



// ListCloudFrontOriginAccessIdentitiesResult
/** 
 * The returned result of the corresponding request. 
**/
export class ListCloudFrontOriginAccessIdentitiesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
}
