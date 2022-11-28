import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizerSummary
/** 
 * The authorizer summary.
**/
export class AuthorizerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerArn" })
  authorizerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerName" })
  authorizerName?: string;
}
