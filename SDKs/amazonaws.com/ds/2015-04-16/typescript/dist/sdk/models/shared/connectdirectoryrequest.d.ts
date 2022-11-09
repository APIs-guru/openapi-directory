import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectoryConnectSettings } from "./directoryconnectsettings";
import { DirectorySizeEnum } from "./directorysizeenum";
import { Tag } from "./tag";
/**
 * Contains the inputs for the <a>ConnectDirectory</a> operation.
**/
export declare class ConnectDirectoryRequest extends SpeakeasyBase {
    connectSettings: DirectoryConnectSettings;
    description?: string;
    name: string;
    password: string;
    shortName?: string;
    size: DirectorySizeEnum;
    tags?: Tag[];
}
