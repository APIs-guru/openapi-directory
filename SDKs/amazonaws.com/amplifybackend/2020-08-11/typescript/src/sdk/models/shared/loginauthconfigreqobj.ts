import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoginAuthConfigReqObj
/** 
 * The request object for this operation.
**/
export class LoginAuthConfigReqObj extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsCognitoIdentityPoolId" })
  awsCognitoIdentityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsCognitoRegion" })
  awsCognitoRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsUserPoolsId" })
  awsUserPoolsId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsUserPoolsWebClientId" })
  awsUserPoolsWebClientId?: string;
}
