import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationRecorder } from "./configurationrecorder";


// DescribeConfigurationRecordersResponse
/** 
 * The output for the <a>DescribeConfigurationRecorders</a> action.
**/
export class DescribeConfigurationRecordersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationRecorders", elemType: shared.ConfigurationRecorder })
  configurationRecorders?: ConfigurationRecorder[];
}
