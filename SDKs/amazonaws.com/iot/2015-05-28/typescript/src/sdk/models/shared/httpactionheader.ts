import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpActionHeader
/** 
 * The HTTP action header.
**/
export class HttpActionHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
