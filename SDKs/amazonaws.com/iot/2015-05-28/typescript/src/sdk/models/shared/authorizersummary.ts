import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizerSummary
/** 
 * The authorizer summary.
**/
export class AuthorizerSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerArn" })
  authorizerArn?: string;

  @Metadata({ data: "json, name=authorizerName" })
  authorizerName?: string;
}
