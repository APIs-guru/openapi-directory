import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// GetSamlProviderResponse
/** 
 * Contains the response to a successful <a>GetSAMLProvider</a> request. 
**/
export class GetSamlProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  samlMetadataDocument?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  validUntil?: Date;
}
