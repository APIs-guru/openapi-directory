import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetEntitlementsRequest
/** 
 * The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
**/
export class GetEntitlementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductCode" })
  productCode: string;
}
