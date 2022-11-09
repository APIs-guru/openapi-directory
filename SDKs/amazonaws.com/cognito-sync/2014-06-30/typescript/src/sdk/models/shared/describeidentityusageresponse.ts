import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityUsage } from "./identityusage";


// DescribeIdentityUsageResponse
/** 
 * The response to a successful DescribeIdentityUsage request.
**/
export class DescribeIdentityUsageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityUsage" })
  identityUsage?: IdentityUsage;
}
