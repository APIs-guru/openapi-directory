import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentationPart } from "./documentationpart";



// DocumentationParts
/** 
 * <p>The collection of documentation parts of an API.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a> </div>
**/
export class DocumentationParts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DocumentationPart })
  items?: DocumentationPart[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
