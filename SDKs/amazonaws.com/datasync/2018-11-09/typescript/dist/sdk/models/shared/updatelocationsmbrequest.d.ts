import { SpeakeasyBase } from "../../../internal/utils";
import { SmbMountOptions } from "./smbmountoptions";
export declare class UpdateLocationSmbRequest extends SpeakeasyBase {
    agentArns?: string[];
    domain?: string;
    locationArn: string;
    mountOptions?: SmbMountOptions;
    password?: string;
    subdirectory?: string;
    user?: string;
}
