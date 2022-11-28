import { SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";
/**
 * DescribeLocationNfsResponse
**/
export declare class DescribeLocationNfsResponse extends SpeakeasyBase {
    creationTime?: Date;
    locationArn?: string;
    locationUri?: string;
    mountOptions?: NfsMountOptions;
    onPremConfig?: OnPremConfig;
}
