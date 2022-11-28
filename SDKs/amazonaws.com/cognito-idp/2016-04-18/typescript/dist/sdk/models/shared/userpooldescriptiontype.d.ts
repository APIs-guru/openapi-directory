import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaConfigType } from "./lambdaconfigtype";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * A user pool description.
**/
export declare class UserPoolDescriptionType extends SpeakeasyBase {
    creationDate?: Date;
    id?: string;
    lambdaConfig?: LambdaConfigType;
    lastModifiedDate?: Date;
    name?: string;
    status?: StatusTypeEnum;
}
