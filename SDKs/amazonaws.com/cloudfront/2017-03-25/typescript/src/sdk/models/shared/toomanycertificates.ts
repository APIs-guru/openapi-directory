import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyCertificates
/** 
 * You cannot create anymore custom SSL/TLS certificates.
**/
export class TooManyCertificates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
