import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProactiveAnomaly } from "./proactiveanomaly";
import { ReactiveAnomaly } from "./reactiveanomaly";
export declare class DescribeAnomalyResponse extends SpeakeasyBase {
    proactiveAnomaly?: ProactiveAnomaly;
    reactiveAnomaly?: ReactiveAnomaly;
}
