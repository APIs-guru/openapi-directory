import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
**/
export declare class S3Origin extends SpeakeasyBase {
    domainName: string;
    originAccessIdentity: string;
}
