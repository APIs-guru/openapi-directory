import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryEditionEnum } from "./directoryeditionenum";
import { Tag } from "./tag";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
/**
 * Creates an Managed Microsoft AD directory.
**/
export declare class CreateMicrosoftAdRequest extends SpeakeasyBase {
    description?: string;
    edition?: DirectoryEditionEnum;
    name: string;
    password: string;
    shortName?: string;
    tags?: Tag[];
    vpcSettings: DirectoryVpcSettings;
}
