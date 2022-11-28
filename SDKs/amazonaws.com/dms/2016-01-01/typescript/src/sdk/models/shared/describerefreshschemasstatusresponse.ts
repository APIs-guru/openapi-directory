import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RefreshSchemasStatus } from "./refreshschemasstatus";



// DescribeRefreshSchemasStatusResponse
/** 
 * <p/>
**/
export class DescribeRefreshSchemasStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefreshSchemasStatus" })
  refreshSchemasStatus?: RefreshSchemasStatus;
}
