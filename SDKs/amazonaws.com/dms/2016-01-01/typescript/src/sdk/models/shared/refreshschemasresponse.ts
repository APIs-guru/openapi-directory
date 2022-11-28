import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RefreshSchemasStatus } from "./refreshschemasstatus";



// RefreshSchemasResponse
/** 
 * <p/>
**/
export class RefreshSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefreshSchemasStatus" })
  refreshSchemasStatus?: RefreshSchemasStatus;
}
