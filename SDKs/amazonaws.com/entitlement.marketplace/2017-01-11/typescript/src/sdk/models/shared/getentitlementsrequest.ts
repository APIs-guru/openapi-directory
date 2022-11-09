import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetEntitlementsRequest
/** 
 * The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
**/
export class GetEntitlementsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: Map<string, string[]>;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProductCode" })
  productCode: string;
}
