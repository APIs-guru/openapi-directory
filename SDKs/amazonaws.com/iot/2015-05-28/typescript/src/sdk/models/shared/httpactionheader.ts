import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpActionHeader
/** 
 * The HTTP action header.
**/
export class HttpActionHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
