import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualRouterData } from "./virtualrouterdata";


// DescribeVirtualRouterOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeVirtualRouterOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualRouter" })
  virtualRouter: VirtualRouterData;
}
