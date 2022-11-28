import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
**/
export declare class KeyGroupConfig extends SpeakeasyBase {
    comment?: string;
    items: string[];
    name: string;
}
