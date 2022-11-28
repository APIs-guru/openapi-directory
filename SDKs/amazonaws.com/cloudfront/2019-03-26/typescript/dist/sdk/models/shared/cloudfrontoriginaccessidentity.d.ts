import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFrontOriginAccessIdentityConfig } from "./cloudfrontoriginaccessidentityconfig";
/**
 * CloudFront origin access identity.
**/
export declare class CloudFrontOriginAccessIdentity extends SpeakeasyBase {
    cloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
    id: string;
    s3CanonicalUserId: string;
}
