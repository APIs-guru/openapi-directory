import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeConfigurationRecorderStatusRequest
/** 
 * The input for the <a>DescribeConfigurationRecorderStatus</a> action.
**/
export class DescribeConfigurationRecorderStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationRecorderNames" })
  configurationRecorderNames?: string[];
}
