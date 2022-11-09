import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IdentityPoolUsage } from "./identitypoolusage";


// ListIdentityPoolUsageResponse
/** 
 * Returned for a successful ListIdentityPoolUsage request.
**/
export class ListIdentityPoolUsageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=IdentityPoolUsages", elemType: shared.IdentityPoolUsage })
  identityPoolUsages?: IdentityPoolUsage[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
