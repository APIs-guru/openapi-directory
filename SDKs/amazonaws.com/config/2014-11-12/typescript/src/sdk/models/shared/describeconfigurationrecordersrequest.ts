import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeConfigurationRecordersRequest
/** 
 * The input for the <a>DescribeConfigurationRecorders</a> action.
**/
export class DescribeConfigurationRecordersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationRecorderNames" })
  configurationRecorderNames?: string[];
}
