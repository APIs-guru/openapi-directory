import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// GetOpenIdConnectProviderResponse
/** 
 * Contains the response to a successful <a>GetOpenIDConnectProvider</a> request. 
**/
export class GetOpenIdConnectProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientIdList?: string[];

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  thumbprintList?: string[];

  @SpeakeasyMetadata()
  url?: string;
}
