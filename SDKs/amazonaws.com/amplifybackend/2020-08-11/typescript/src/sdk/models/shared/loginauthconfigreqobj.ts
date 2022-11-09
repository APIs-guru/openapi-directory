import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoginAuthConfigReqObj
/** 
 * The request object for this operation.
**/
export class LoginAuthConfigReqObj extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsCognitoIdentityPoolId" })
  awsCognitoIdentityPoolId?: string;

  @Metadata({ data: "json, name=AwsCognitoRegion" })
  awsCognitoRegion?: string;

  @Metadata({ data: "json, name=AwsUserPoolsId" })
  awsUserPoolsId?: string;

  @Metadata({ data: "json, name=AwsUserPoolsWebClientId" })
  awsUserPoolsWebClientId?: string;
}
