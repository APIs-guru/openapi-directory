import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveTrustedSigners } from "./activetrustedsigners";
import { StreamingDistributionConfig } from "./streamingdistributionconfig";
/**
 * A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
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
