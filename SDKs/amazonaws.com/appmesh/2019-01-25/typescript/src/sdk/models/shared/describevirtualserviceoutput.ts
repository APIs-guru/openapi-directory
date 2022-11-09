import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualServiceData } from "./virtualservicedata";


// DescribeVirtualServiceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeVirtualServiceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualService" })
  virtualService: VirtualServiceData;
}
