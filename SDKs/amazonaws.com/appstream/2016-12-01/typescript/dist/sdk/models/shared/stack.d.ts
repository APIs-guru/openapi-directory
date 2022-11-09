import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettingsResponse } from "./applicationsettingsresponse";
import { StackError } from "./stackerror";
import { StorageConnector } from "./storageconnector";
import { UserSetting } from "./usersetting";
/**
 * Describes a stack.
**/
export declare class Stack extends SpeakeasyBase {
    accessEndpoints?: AccessEndpoint[];
    applicationSettings?: ApplicationSettingsResponse;
    arn?: string;
    createdTime?: Date;
    description?: string;
    displayName?: string;
    embedHostDomains?: string[];
    feedbackUrl?: string;
    name: string;
    redirectUrl?: string;
    stackErrors?: StackError[];
    storageConnectors?: StorageConnector[];
    userSettings?: UserSetting[];
}
