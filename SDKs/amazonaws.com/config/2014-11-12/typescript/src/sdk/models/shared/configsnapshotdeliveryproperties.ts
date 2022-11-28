import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";



// ConfigSnapshotDeliveryProperties
/** 
 * <p>Provides options for how often Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often Config delivers configuration snapshots. This value also sets how often Config invokes evaluations for Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p>
**/
export class ConfigSnapshotDeliveryProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryFrequency" })
  deliveryFrequency?: MaximumExecutionFrequencyEnum;
}
