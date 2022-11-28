import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";
/**
 * Contains information about a connection.
**/
export declare class Connection extends SpeakeasyBase {
    authorizationType?: ConnectionAuthorizationTypeEnum;
    connectionArn?: string;
    connectionState?: ConnectionStateEnum;
    creationTime?: Date;
    lastAuthorizedTime?: Date;
    lastModifiedTime?: Date;
    name?: string;
    stateReason?: string;
}
