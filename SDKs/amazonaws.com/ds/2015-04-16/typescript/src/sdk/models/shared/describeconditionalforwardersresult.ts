import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionalForwarder } from "./conditionalforwarder";



// DescribeConditionalForwardersResult
/** 
 * The result of a DescribeConditionalForwarder request.
**/
export class DescribeConditionalForwardersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConditionalForwarders", elemType: ConditionalForwarder })
  conditionalForwarders?: ConditionalForwarder[];
}
