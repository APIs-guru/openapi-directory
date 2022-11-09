import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionQueryStringParameter
/** 
 * Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
**/
export class ConnectionQueryStringParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsValueSecret" })
  isValueSecret?: boolean;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
