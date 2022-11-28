import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterData } from "./virtualrouterdata";



// DescribeVirtualRouterOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeVirtualRouterOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualRouter" })
  virtualRouter: VirtualRouterData;
}
