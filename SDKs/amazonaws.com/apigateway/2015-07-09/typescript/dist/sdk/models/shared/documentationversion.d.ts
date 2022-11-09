import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>A snapshot of the documentation of an API.</p> <div class="remarks"><p>Publishing API documentation involves creating a documentation version associated with an API stage and exporting the versioned documentation to an external (e.g., OpenAPI) file.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersions</a> </div>
**/
export declare class DocumentationVersion extends SpeakeasyBase {
    createdDate?: Date;
    description?: string;
    version?: string;
}
