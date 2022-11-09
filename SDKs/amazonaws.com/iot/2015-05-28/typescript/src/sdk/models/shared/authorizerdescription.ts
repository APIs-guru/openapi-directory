import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizerStatusEnum } from "./authorizerstatusenum";


// AuthorizerDescription
/** 
 * The authorizer description.
**/
export class AuthorizerDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerArn" })
  authorizerArn?: string;

  @Metadata({ data: "json, name=authorizerFunctionArn" })
  authorizerFunctionArn?: string;

  @Metadata({ data: "json, name=authorizerName" })
  authorizerName?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=signingDisabled" })
  signingDisabled?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: AuthorizerStatusEnum;

  @Metadata({ data: "json, name=tokenKeyName" })
  tokenKeyName?: string;

  @Metadata({ data: "json, name=tokenSigningPublicKeys" })
  tokenSigningPublicKeys?: Map<string, string>;
}
