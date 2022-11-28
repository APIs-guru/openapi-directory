import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestInvokeAuthorizerResponse
/** 
 * Represents the response of the test invoke request for a custom <a>Authorizer</a>
**/
export class TestInvokeAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorization" })
  authorization?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=claims" })
  claims?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=clientStatus" })
  clientStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: number;

  @SpeakeasyMetadata({ data: "json, name=log" })
  log?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;
}
