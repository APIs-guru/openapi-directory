import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HsmStatusEnum } from "./hsmstatusenum";
import { SubscriptionTypeEnum } from "./subscriptiontypeenum";
/**
 * Contains the output of the <a>DescribeHsm</a> operation.
**/
export declare class DescribeHsmResponse extends SpeakeasyBase {
    availabilityZone?: string;
    eniId?: string;
    eniIp?: string;
    hsmArn?: string;
    hsmType?: string;
    iamRoleArn?: string;
    partitions?: string[];
    serialNumber?: string;
    serverCertLastUpdated?: string;
    serverCertUri?: string;
    softwareVersion?: string;
    sshKeyLastUpdated?: string;
    sshPublicKey?: string;
    status?: HsmStatusEnum;
    statusDetails?: string;
    subnetId?: string;
    subscriptionEndDate?: string;
    subscriptionStartDate?: string;
    subscriptionType?: SubscriptionTypeEnum;
    vendorName?: string;
    vpcId?: string;
}
