import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeltaTimeSessionWindowConfiguration
/** 
 * <p>A structure that contains the configuration information of a delta time session window.</p> <p> <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html"> <code>DeltaTime</code> </a> specifies a time interval. You can use <code>DeltaTime</code> to create dataset contents with data that has arrived in the data store since the last execution. For an example of <code>DeltaTime</code>, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6"> Creating a SQL dataset with a delta window (CLI)</a> in the <i>IoT Analytics User Guide</i>.</p>
**/
export class DeltaTimeSessionWindowConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes: number;
}
