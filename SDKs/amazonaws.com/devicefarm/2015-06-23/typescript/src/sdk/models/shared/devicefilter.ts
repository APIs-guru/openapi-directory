import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceFilterAttributeEnum } from "./devicefilterattributeenum";
import { RuleOperatorEnum } from "./ruleoperatorenum";


// DeviceFilter
/** 
 * <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>
**/
export class DeviceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute: DeviceFilterAttributeEnum;

  @Metadata({ data: "json, name=operator" })
  operator: RuleOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
