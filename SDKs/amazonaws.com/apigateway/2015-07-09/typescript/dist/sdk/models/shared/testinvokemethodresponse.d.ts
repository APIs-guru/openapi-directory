import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>Represents the response of the test invoke request in the HTTP method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a> </div>
**/
export declare class TestInvokeMethodResponse extends SpeakeasyBase {
    body?: string;
    headers?: Map<string, string>;
    latency?: number;
    log?: string;
    multiValueHeaders?: Map<string, string[]>;
    status?: number;
}
