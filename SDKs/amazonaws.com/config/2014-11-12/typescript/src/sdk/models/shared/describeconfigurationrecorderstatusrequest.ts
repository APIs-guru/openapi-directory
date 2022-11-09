import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeConfigurationRecorderStatusRequest
/** 
 * The input for the <a>DescribeConfigurationRecorderStatus</a> action.
**/
export class DescribeConfigurationRecorderStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationRecorderNames" })
  configurationRecorderNames?: string[];
}
