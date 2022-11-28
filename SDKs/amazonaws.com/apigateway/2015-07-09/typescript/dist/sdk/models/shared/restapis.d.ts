import { SpeakeasyBase } from "../../../internal/utils";
import { RestApi } from "./restapi";
/**
 * <p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export declare class RestApis extends SpeakeasyBase {
    items?: RestApi[];
    position?: string;
}
