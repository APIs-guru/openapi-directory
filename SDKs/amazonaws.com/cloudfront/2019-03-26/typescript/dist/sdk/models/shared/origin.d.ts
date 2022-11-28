import { SpeakeasyBase } from "../../../internal/utils";
import { CustomHeaders } from "./customheaders";
import { CustomOriginConfig } from "./customoriginconfig";
import { S3OriginConfig } from "./s3originconfig";
/**
 * <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use the <code>S3OriginConfig</code> type to specify an Amazon S3 bucket that is <i> <b>not</b> </i> configured with static website hosting.</p> </li> <li> <p>Use the <code>CustomOriginConfig</code> type to specify various other kinds of content containers or HTTP servers, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage origin</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>
**/
export declare class Origin extends SpeakeasyBase {
    connectionAttempts?: number;
    connectionTimeout?: number;
    customHeaders?: CustomHeaders;
    customOriginConfig?: CustomOriginConfig;
    domainName: string;
    id: string;
    originPath?: string;
    s3OriginConfig?: S3OriginConfig;
}
