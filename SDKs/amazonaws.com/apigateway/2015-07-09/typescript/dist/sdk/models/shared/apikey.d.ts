import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
**/
export declare class ApiKey extends SpeakeasyBase {
    createdDate?: Date;
    customerId?: string;
    description?: string;
    enabled?: boolean;
    id?: string;
    lastUpdatedDate?: Date;
    name?: string;
    stageKeys?: string[];
    tags?: Map<string, string>;
    value?: string;
}
