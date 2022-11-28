import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKey } from "./apikey";
/**
 * <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
**/
export declare class ApiKeys extends SpeakeasyBase {
    items?: ApiKey[];
    position?: string;
    warnings?: string[];
}
