import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExportResponse
/** 
 * The binary blob response to <a>GetExport</a>, which contains the generated SDK.
**/
export class ExportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;
}
