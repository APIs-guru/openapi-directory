import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestInvokeMethodResponse
/** 
 * <p>Represents the response of the test invoke request in the HTTP method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a> </div>
**/
export class TestInvokeMethodResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=latency" })
  latency?: number;

  @Metadata({ data: "json, name=log" })
  log?: string;

  @Metadata({ data: "json, name=multiValueHeaders" })
  multiValueHeaders?: Map<string, string[]>;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
