import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityPoolUsage } from "./identitypoolusage";


// DescribeIdentityPoolUsageResponse
/** 
 * Response to a successful DescribeIdentityPoolUsage request.
**/
export class DescribeIdentityPoolUsageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolUsage" })
  identityPoolUsage?: IdentityPoolUsage;
}
