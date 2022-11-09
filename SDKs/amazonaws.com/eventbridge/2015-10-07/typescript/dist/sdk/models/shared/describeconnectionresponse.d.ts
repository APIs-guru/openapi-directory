import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionAuthResponseParameters } from "./connectionauthresponseparameters";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";
export declare class DescribeConnectionResponse extends SpeakeasyBase {
    authParameters?: ConnectionAuthResponseParameters;
    authorizationType?: ConnectionAuthorizationTypeEnum;
    connectionArn?: string;
    connectionState?: ConnectionStateEnum;
    creationTime?: Date;
    description?: string;
    lastAuthorizedTime?: Date;
    lastModifiedTime?: Date;
    name?: string;
    secretArn?: string;
    stateReason?: string;
}
