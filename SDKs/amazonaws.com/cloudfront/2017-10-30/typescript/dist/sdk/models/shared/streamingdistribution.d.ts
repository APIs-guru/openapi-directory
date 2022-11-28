import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveTrustedSigners } from "./activetrustedsigners";
import { StreamingDistributionConfig } from "./streamingdistributionconfig";
/**
 * A streaming distribution.
**/
export declare class StreamingDistribution extends SpeakeasyBase {
    arn: string;
    activeTrustedSigners: ActiveTrustedSigners;
    domainName: string;
    id: string;
    lastModifiedTime?: Date;
    status: string;
    streamingDistributionConfig: StreamingDistributionConfig;
}
