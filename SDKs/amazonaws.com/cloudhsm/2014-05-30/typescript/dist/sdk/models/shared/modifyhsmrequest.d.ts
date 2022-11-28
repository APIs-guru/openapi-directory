import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the inputs for the <a>ModifyHsm</a> operation.
**/
export declare class ModifyHsmRequest extends SpeakeasyBase {
    eniIp?: string;
    externalId?: string;
    hsmArn: string;
    iamRoleArn?: string;
    subnetId?: string;
    syslogIp?: string;
}
