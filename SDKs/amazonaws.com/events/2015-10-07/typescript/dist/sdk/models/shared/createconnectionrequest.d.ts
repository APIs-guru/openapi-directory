import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateConnectionAuthRequestParameters } from "./createconnectionauthrequestparameters";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
export declare class CreateConnectionRequest extends SpeakeasyBase {
    authParameters: CreateConnectionAuthRequestParameters;
    authorizationType: ConnectionAuthorizationTypeEnum;
    description?: string;
    name: string;
}
