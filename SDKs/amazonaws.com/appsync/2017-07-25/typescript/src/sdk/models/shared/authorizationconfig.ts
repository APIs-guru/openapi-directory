import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationTypeEnum } from "./authorizationtypeenum";
import { AwsIamConfig } from "./awsiamconfig";


// AuthorizationConfig
/** 
 * The authorization config in case the HTTP endpoint requires authorization.
**/
export class AuthorizationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationType" })
  authorizationType: AuthorizationTypeEnum;

  @Metadata({ data: "json, name=awsIamConfig" })
  awsIamConfig?: AwsIamConfig;
}
