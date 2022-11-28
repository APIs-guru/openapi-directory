import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityUsage } from "./identityusage";



// DescribeIdentityUsageResponse
/** 
 * The response to a successful DescribeIdentityUsage request.
**/
export class DescribeIdentityUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityUsage" })
  identityUsage?: IdentityUsage;
}
