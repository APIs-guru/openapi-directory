import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionBodyParameter
/** 
 * Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB.
**/
export class ConnectionBodyParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsValueSecret" })
  isValueSecret?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
