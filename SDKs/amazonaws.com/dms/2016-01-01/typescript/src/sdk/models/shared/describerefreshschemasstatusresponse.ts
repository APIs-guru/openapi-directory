import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RefreshSchemasStatus } from "./refreshschemasstatus";


// DescribeRefreshSchemasStatusResponse
/** 
 * <p/>
**/
export class DescribeRefreshSchemasStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefreshSchemasStatus" })
  refreshSchemasStatus?: RefreshSchemasStatus;
}
