import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityPoolUsage } from "./identitypoolusage";



// DescribeIdentityPoolUsageResponse
/** 
 * Response to a successful DescribeIdentityPoolUsage request.
**/
export class DescribeIdentityPoolUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolUsage" })
  identityPoolUsage?: IdentityPoolUsage;
}
