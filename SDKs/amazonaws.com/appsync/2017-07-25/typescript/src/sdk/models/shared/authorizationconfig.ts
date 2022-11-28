import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationTypeEnum } from "./authorizationtypeenum";
import { AwsIamConfig } from "./awsiamconfig";



// AuthorizationConfig
/** 
 * The authorization config in case the HTTP endpoint requires authorization.
**/
export class AuthorizationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationType" })
  authorizationType: AuthorizationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=awsIamConfig" })
  awsIamConfig?: AwsIamConfig;
}
