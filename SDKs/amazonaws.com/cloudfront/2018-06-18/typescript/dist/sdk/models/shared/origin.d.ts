import { SpeakeasyBase } from "../../../internal/utils";
import { CustomHeaders } from "./customheaders";
import { CustomOriginConfig } from "./customoriginconfig";
import { S3OriginConfig } from "./s3originconfig";
/**
 * <p>A complex type that describes the Amazon S3 bucket or the HTTP server (for example, a web server) from which CloudFront gets your files. You must create at least one origin.</p> <p>For the current limit on the number of origins that you can create for a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
**/
export declare class Origin extends SpeakeasyBase {
    customHeaders?: CustomHeaders;
    customOriginConfig?: CustomOriginConfig;
    domainName: string;
    id: string;
    originPath?: string;
    s3OriginConfig?: S3OriginConfig;
}
