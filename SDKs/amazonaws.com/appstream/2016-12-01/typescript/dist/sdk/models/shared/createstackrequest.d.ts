import { SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettings } from "./applicationsettings";
import { StorageConnector } from "./storageconnector";
import { UserSetting } from "./usersetting";
export declare class CreateStackRequest extends SpeakeasyBase {
    accessEndpoints?: AccessEndpoint[];
    applicationSettings?: ApplicationSettings;
    description?: string;
    displayName?: string;
    embedHostDomains?: string[];
    feedbackUrl?: string;
    name: string;
    redirectUrl?: string;
    storageConnectors?: StorageConnector[];
    tags?: Map<string, string>;
    userSettings?: UserSetting[];
}
