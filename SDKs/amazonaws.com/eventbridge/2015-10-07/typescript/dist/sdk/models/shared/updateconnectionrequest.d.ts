import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateConnectionAuthRequestParameters } from "./updateconnectionauthrequestparameters";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
export declare class UpdateConnectionRequest extends SpeakeasyBase {
    authParameters?: UpdateConnectionAuthRequestParameters;
    authorizationType?: ConnectionAuthorizationTypeEnum;
    description?: string;
    name: string;
}
