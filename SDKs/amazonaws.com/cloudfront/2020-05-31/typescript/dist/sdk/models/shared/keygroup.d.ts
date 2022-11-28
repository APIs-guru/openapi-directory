import { SpeakeasyBase } from "../../../internal/utils";
import { KeyGroupConfig } from "./keygroupconfig";
/**
 * <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
**/
export declare class KeyGroup extends SpeakeasyBase {
    id: string;
    keyGroupConfig: KeyGroupConfig;
    lastModifiedTime: Date;
}
