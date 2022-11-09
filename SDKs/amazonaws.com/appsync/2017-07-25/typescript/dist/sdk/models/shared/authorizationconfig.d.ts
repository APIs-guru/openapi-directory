import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationTypeEnum } from "./authorizationtypeenum";
import { AwsIamConfig } from "./awsiamconfig";
/**
 * The authorization config in case the HTTP endpoint requires authorization.
**/
export declare class AuthorizationConfig extends SpeakeasyBase {
    authorizationType: AuthorizationTypeEnum;
    awsIamConfig?: AwsIamConfig;
}
