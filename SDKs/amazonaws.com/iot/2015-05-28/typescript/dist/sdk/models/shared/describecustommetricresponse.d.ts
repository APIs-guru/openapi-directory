import { SpeakeasyBase } from "../../../internal/utils";
import { CustomMetricTypeEnum } from "./custommetrictypeenum";
export declare class DescribeCustomMetricResponse extends SpeakeasyBase {
    creationDate?: Date;
    displayName?: string;
    lastModifiedDate?: Date;
    metricArn?: string;
    metricName?: string;
    metricType?: CustomMetricTypeEnum;
}
