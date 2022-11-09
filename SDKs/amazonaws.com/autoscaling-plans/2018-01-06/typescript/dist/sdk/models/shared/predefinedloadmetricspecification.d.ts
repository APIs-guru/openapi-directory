import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LoadMetricTypeEnum } from "./loadmetrictypeenum";
/**
 * <p>Represents a predefined metric that can be used for predictive scaling.</p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>
**/
export declare class PredefinedLoadMetricSpecification extends SpeakeasyBase {
    predefinedLoadMetricType: LoadMetricTypeEnum;
    resourceLabel?: string;
}
