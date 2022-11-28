import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvancedFieldSelector } from "./advancedfieldselector";



// AdvancedEventSelector
/** 
 * <p>Advanced event selectors let you create fine-grained selectors for the following CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p> <ul> <li> <p> <code>readOnly</code> </p> </li> <li> <p> <code>eventSource</code> </p> </li> <li> <p> <code>eventName</code> </p> </li> <li> <p> <code>eventCategory</code> </p> </li> <li> <p> <code>resources.type</code> </p> </li> <li> <p> <code>resources.ARN</code> </p> </li> </ul> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
**/
export class AdvancedEventSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FieldSelectors", elemType: AdvancedFieldSelector })
  fieldSelectors: AdvancedFieldSelector[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
