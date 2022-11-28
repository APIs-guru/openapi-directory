import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerStatusEnum } from "./authorizerstatusenum";



// AuthorizerDescription
/** 
 * The authorizer description.
**/
export class AuthorizerDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerArn" })
  authorizerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerFunctionArn" })
  authorizerFunctionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerName" })
  authorizerName?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=signingDisabled" })
  signingDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AuthorizerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tokenKeyName" })
  tokenKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenSigningPublicKeys" })
  tokenSigningPublicKeys?: Map<string, string>;
}
