import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroupConfig } from "./keygroupconfig";



// KeyGroup
/** 
 * <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
**/
export class KeyGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  keyGroupConfig: KeyGroupConfig;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;
}
