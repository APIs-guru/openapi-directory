import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveTrustedSigners } from "./activetrustedsigners";
import { DistributionConfig } from "./distributionconfig";
/**
 * The distribution's information.
**/
export declare class Distribution extends SpeakeasyBase {
    arn: string;
    activeTrustedSigners: ActiveTrustedSigners;
    distributionConfig: DistributionConfig;
    domainName: string;
    id: string;
    inProgressInvalidationBatches: number;
    lastModifiedTime: Date;
    status: string;
}
