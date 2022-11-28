import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportResponse
/** 
 * The binary blob response to <a>GetExport</a>, which contains the generated SDK.
**/
export class ExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;
}
