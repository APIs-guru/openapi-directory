import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IoTJobRateIncreaseCriteria
/** 
 * Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.
**/
export class IoTJobRateIncreaseCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfNotifiedThings" })
  numberOfNotifiedThings?: number;

  @Metadata({ data: "json, name=numberOfSucceededThings" })
  numberOfSucceededThings?: number;
}
