import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestInvokeAuthorizerResponse
/** 
 * Represents the response of the test invoke request for a custom <a>Authorizer</a>
**/
export class TestInvokeAuthorizerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorization" })
  authorization?: Map<string, string[]>;

  @Metadata({ data: "json, name=claims" })
  claims?: Map<string, string>;

  @Metadata({ data: "json, name=clientStatus" })
  clientStatus?: number;

  @Metadata({ data: "json, name=latency" })
  latency?: number;

  @Metadata({ data: "json, name=log" })
  log?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: string;

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;
}
