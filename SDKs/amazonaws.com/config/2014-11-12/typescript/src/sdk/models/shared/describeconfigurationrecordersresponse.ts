import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationRecorder } from "./configurationrecorder";



// DescribeConfigurationRecordersResponse
/** 
 * The output for the <a>DescribeConfigurationRecorders</a> action.
**/
export class DescribeConfigurationRecordersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationRecorders", elemType: ConfigurationRecorder })
  configurationRecorders?: ConfigurationRecorder[];
}
