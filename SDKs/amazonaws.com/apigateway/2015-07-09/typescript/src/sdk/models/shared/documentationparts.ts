import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentationPart } from "./documentationpart";


// DocumentationParts
/** 
 * <p>The collection of documentation parts of an API.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a> </div>
**/
export class DocumentationParts extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.DocumentationPart })
  items?: DocumentationPart[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
