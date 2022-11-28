import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// CreateSamlProviderResponse
/** 
 * Contains the response to a successful <a>CreateSAMLProvider</a> request. 
**/
export class CreateSamlProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  samlProviderArn?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
