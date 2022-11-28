import { SpeakeasyBase } from "../../../internal/utils";
import { AddonInfo } from "./addoninfo";
export declare class DescribeAddonVersionsResponse extends SpeakeasyBase {
    addons?: AddonInfo[];
    nextToken?: string;
}
