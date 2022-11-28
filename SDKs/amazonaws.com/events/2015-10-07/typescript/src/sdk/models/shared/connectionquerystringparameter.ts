import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionQueryStringParameter
/** 
 * Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
**/
export class ConnectionQueryStringParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsValueSecret" })
  isValueSecret?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
