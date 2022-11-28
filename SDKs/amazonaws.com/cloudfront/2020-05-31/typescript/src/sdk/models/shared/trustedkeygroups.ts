import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedKeyGroups
/** 
 * A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export class TrustedKeyGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
