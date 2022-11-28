import { SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettings } from "./applicationsettings";
import { StackAttributeEnum } from "./stackattributeenum";
import { StorageConnector } from "./storageconnector";
import { UserSetting } from "./usersetting";
export declare class UpdateStackRequest extends SpeakeasyBase {
    accessEndpoints?: AccessEndpoint[];
    applicationSettings?: ApplicationSettings;
    attributesToDelete?: StackAttributeEnum[];
    deleteStorageConnectors?: boolean;
    description?: string;
    displayName?: string;
    embedHostDomains?: string[];
    feedbackUrl?: string;
    name: string;
    redirectUrl?: string;
    storageConnectors?: StorageConnector[];
    userSettings?: UserSetting[];
}
