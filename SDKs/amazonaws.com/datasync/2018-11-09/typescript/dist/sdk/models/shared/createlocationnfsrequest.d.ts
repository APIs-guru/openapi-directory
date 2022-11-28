import { SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";
import { TagListEntry } from "./taglistentry";
/**
 * CreateLocationNfsRequest
**/
export declare class CreateLocationNfsRequest extends SpeakeasyBase {
    mountOptions?: NfsMountOptions;
    onPremConfig: OnPremConfig;
    serverHostname: string;
    subdirectory: string;
    tags?: TagListEntry[];
}
