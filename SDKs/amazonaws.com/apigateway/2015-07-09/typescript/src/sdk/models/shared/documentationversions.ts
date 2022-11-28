import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentationVersion } from "./documentationversion";



// DocumentationVersions
/** 
 * <p>The collection of documentation snapshots of an API. </p> <div class="remarks"><p>Use the <a>DocumentationVersions</a> to manage documentation snapshots associated with various API stages.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersion</a> </div>
**/
export class DocumentationVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DocumentationVersion })
  items?: DocumentationVersion[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
