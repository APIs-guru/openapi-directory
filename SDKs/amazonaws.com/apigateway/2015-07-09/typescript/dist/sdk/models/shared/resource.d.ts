import { SpeakeasyBase } from "../../../internal/utils";
import { Method } from "./method";
/**
 * <p>Represents an API resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export declare class Resource extends SpeakeasyBase {
    id?: string;
    parentId?: string;
    path?: string;
    pathPart?: string;
    resourceMethods?: Map<string, Method>;
}
