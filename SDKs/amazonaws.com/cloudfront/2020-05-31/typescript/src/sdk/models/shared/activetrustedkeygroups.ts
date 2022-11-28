import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KgKeyPairIds } from "./kgkeypairids";



// ActiveTrustedKeyGroups
/** 
 * A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export class ActiveTrustedKeyGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata({ elemType: KgKeyPairIds })
  items?: KgKeyPairIds[];

  @SpeakeasyMetadata()
  quantity: number;
}
