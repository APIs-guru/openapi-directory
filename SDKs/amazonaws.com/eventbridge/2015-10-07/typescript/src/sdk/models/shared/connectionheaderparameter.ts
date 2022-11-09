import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionHeaderParameter
/** 
 * Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB.
**/
export class ConnectionHeaderParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsValueSecret" })
  isValueSecret?: boolean;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
