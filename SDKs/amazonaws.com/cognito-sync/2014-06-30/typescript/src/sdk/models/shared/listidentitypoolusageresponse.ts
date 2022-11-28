import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityPoolUsage } from "./identitypoolusage";



// ListIdentityPoolUsageResponse
/** 
 * Returned for a successful ListIdentityPoolUsage request.
**/
export class ListIdentityPoolUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolUsages", elemType: IdentityPoolUsage })
  identityPoolUsages?: IdentityPoolUsage[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
