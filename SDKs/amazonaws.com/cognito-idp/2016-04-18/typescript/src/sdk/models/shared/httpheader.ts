import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpHeader
/** 
 * The HTTP header.
**/
export class HttpHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headerName" })
  headerName?: string;

  @SpeakeasyMetadata({ data: "json, name=headerValue" })
  headerValue?: string;
}
