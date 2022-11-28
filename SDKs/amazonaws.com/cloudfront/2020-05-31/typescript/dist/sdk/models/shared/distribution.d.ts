import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveTrustedKeyGroups } from "./activetrustedkeygroups";
import { ActiveTrustedSigners } from "./activetrustedsigners";
import { AliasIcpRecordal } from "./aliasicprecordal";
import { DistributionConfig } from "./distributionconfig";
/**
 * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
**/
export declare class Distribution extends SpeakeasyBase {
    arn: string;
    activeTrustedKeyGroups?: ActiveTrustedKeyGroups;
    activeTrustedSigners?: ActiveTrustedSigners;
    aliasIcpRecordals?: AliasIcpRecordal[];
    distributionConfig: DistributionConfig;
    domainName: string;
    id: string;
    inProgressInvalidationBatches: number;
    lastModifiedTime: Date;
    status: string;
}
