import { SpeakeasyBase } from "../../../internal/utils";
import { SmbMountOptions } from "./smbmountoptions";
import { TagListEntry } from "./taglistentry";
/**
 * CreateLocationSmbRequest
**/
export declare class CreateLocationSmbRequest extends SpeakeasyBase {
    agentArns: string[];
    domain?: string;
    mountOptions?: SmbMountOptions;
    password: string;
    serverHostname: string;
    subdirectory: string;
    tags?: TagListEntry[];
    user: string;
}
