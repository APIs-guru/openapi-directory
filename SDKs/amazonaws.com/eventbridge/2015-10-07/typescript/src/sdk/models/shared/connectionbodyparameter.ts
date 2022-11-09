import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionBodyParameter
/** 
 * Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB.
**/
export class ConnectionBodyParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsValueSecret" })
  isValueSecret?: boolean;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
