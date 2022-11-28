import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OriginCustomHeader
/** 
 * A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. 
**/
export class OriginCustomHeader extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headerName: string;

  @SpeakeasyMetadata()
  headerValue: string;
}
