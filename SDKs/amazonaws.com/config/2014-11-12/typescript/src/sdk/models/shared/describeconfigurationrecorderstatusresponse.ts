import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationRecorderStatus } from "./configurationrecorderstatus";


// DescribeConfigurationRecorderStatusResponse
/** 
 * The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.
**/
export class DescribeConfigurationRecorderStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationRecordersStatus", elemType: shared.ConfigurationRecorderStatus })
  configurationRecordersStatus?: ConfigurationRecorderStatus[];
}
