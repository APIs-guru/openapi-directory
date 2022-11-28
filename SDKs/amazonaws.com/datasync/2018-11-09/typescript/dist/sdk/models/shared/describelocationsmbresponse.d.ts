import { SpeakeasyBase } from "../../../internal/utils";
import { SmbMountOptions } from "./smbmountoptions";
/**
 * DescribeLocationSmbResponse
**/
export declare class DescribeLocationSmbResponse extends SpeakeasyBase {
    agentArns?: string[];
    creationTime?: Date;
    domain?: string;
    locationArn?: string;
    locationUri?: string;
    mountOptions?: SmbMountOptions;
    user?: string;
}
