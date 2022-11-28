import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.
**/
export declare class IoTJobRateIncreaseCriteria extends SpeakeasyBase {
    numberOfNotifiedThings?: number;
    numberOfSucceededThings?: number;
}
