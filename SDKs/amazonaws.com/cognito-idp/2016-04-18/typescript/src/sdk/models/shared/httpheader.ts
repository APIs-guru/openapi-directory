import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpHeader
/** 
 * The HTTP header.
**/
export class HttpHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=headerName" })
  headerName?: string;

  @Metadata({ data: "json, name=headerValue" })
  headerValue?: string;
}
