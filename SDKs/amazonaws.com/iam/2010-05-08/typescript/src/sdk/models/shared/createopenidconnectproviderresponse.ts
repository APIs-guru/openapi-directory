import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// CreateOpenIdConnectProviderResponse
/** 
 * Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request. 
**/
export class CreateOpenIdConnectProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  openIdConnectProviderArn?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
