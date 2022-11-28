import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentationPart } from "./documentationpart";
/**
 * <p>The collection of documentation parts of an API.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a> </div>
**/
export declare class DocumentationParts extends SpeakeasyBase {
    items?: DocumentationPart[];
    position?: string;
}
