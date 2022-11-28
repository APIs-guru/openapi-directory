import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceData } from "./virtualservicedata";



// DescribeVirtualServiceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeVirtualServiceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualService" })
  virtualService: VirtualServiceData;
}
