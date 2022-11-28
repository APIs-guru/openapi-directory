import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeConfigurationRecordersRequest
/** 
 * The input for the <a>DescribeConfigurationRecorders</a> action.
**/
export class DescribeConfigurationRecordersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationRecorderNames" })
  configurationRecorderNames?: string[];
}
