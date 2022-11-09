import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RefreshSchemasStatus } from "./refreshschemasstatus";


// RefreshSchemasResponse
/** 
 * <p/>
**/
export class RefreshSchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefreshSchemasStatus" })
  refreshSchemasStatus?: RefreshSchemasStatus;
}
