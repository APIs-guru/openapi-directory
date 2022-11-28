import { SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";
export declare class UpdateLocationNfsRequest extends SpeakeasyBase {
    locationArn: string;
    mountOptions?: NfsMountOptions;
    onPremConfig?: OnPremConfig;
    subdirectory?: string;
}
