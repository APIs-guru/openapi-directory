import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IoTJobRateIncreaseCriteria
/** 
 * Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.
**/
export class IoTJobRateIncreaseCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfNotifiedThings" })
  numberOfNotifiedThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfSucceededThings" })
  numberOfSucceededThings?: number;
}
