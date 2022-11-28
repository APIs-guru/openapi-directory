import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationRecorderStatus } from "./configurationrecorderstatus";



// DescribeConfigurationRecorderStatusResponse
/** 
 * The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.
**/
export class DescribeConfigurationRecorderStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationRecordersStatus", elemType: ConfigurationRecorderStatus })
  configurationRecordersStatus?: ConfigurationRecorderStatus[];
}
