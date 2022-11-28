import { SpeakeasyBase } from "../../../internal/utils";
import { OriginProtocolPolicyEnum } from "./originprotocolpolicyenum";
import { OriginSslProtocols } from "./originsslprotocols";
/**
 * A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin.
**/
export declare class CustomOriginConfig extends SpeakeasyBase {
    httpPort: number;
    httpsPort: number;
    originKeepaliveTimeout?: number;
    originProtocolPolicy: OriginProtocolPolicyEnum;
    originReadTimeout?: number;
    originSslProtocols?: OriginSslProtocols;
}
