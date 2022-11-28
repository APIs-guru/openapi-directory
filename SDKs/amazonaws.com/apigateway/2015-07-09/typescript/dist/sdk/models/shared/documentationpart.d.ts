import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentationPartLocation } from "./documentationpartlocation";
/**
 * <p>A documentation part for a targeted API entity.</p> <div class="remarks"> <p>A documentation part consists of a content map (<code>properties</code>) and a target (<code>location</code>). The target specifies an API entity to which the documentation content applies. The supported API entity types are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Valid <code>location</code> fields depend on the API entity type. All valid fields are not required.</p> <p>The content map is a JSON string of API-specific key-value pairs. Although an API can use any shape for the content map, only the OpenAPI-compliant documentation fields will be injected into the associated API entity definition in the exported OpenAPI definition file.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationParts</a> </div>
**/
export declare class DocumentationPart extends SpeakeasyBase {
    id?: string;
    location?: DocumentationPartLocation;
    properties?: any;
}
