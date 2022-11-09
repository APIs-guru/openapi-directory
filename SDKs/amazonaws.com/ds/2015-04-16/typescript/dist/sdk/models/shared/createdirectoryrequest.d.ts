import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectorySizeEnum } from "./directorysizeenum";
import { Tag } from "./tag";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
/**
 * Contains the inputs for the <a>CreateDirectory</a> operation.
**/
export declare class CreateDirectoryRequest extends SpeakeasyBase {
    description?: string;
    name: string;
    password: string;
    shortName?: string;
    size: DirectorySizeEnum;
    tags?: Tag[];
    vpcSettings?: DirectoryVpcSettings;
}
