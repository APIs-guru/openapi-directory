import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConditionalForwarder } from "./conditionalforwarder";


// DescribeConditionalForwardersResult
/** 
 * The result of a DescribeConditionalForwarder request.
**/
export class DescribeConditionalForwardersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConditionalForwarders", elemType: shared.ConditionalForwarder })
  conditionalForwarders?: ConditionalForwarder[];
}
