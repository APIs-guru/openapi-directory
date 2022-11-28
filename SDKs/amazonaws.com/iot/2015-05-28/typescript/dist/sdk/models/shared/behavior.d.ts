import { SpeakeasyBase } from "../../../internal/utils";
import { BehaviorCriteria } from "./behaviorcriteria";
import { MetricDimension } from "./metricdimension";
/**
 * A Device Defender security profile behavior.
**/
export declare class Behavior extends SpeakeasyBase {
    criteria?: BehaviorCriteria;
    metric?: string;
    metricDimension?: MetricDimension;
    name: string;
    suppressAlerts?: boolean;
}
