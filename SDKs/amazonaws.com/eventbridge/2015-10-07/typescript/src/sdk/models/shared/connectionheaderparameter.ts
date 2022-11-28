import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionHeaderParameter
/** 
 * Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB.
**/
export class ConnectionHeaderParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsValueSecret" })
  isValueSecret?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
