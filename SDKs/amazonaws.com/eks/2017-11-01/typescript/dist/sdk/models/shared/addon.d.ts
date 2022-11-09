import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AddonHealth } from "./addonhealth";
import { AddonStatusEnum } from "./addonstatusenum";
/**
 * An Amazon EKS add-on.
**/
export declare class Addon extends SpeakeasyBase {
    addonArn?: string;
    addonName?: string;
    addonVersion?: string;
    clusterName?: string;
    createdAt?: Date;
    health?: AddonHealth;
    modifiedAt?: Date;
    serviceAccountRoleArn?: string;
    status?: AddonStatusEnum;
    tags?: Map<string, string>;
}
