import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Matcher
/** 
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
**/
export class Matcher extends SpeakeasyBase {
  @SpeakeasyMetadata()
  grpcCode?: string;

  @SpeakeasyMetadata()
  httpCode?: string;
}
