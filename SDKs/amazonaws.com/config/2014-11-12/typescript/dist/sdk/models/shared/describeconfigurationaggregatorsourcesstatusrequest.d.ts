import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedSourceStatusTypeEnum } from "./aggregatedsourcestatustypeenum";
export declare class DescribeConfigurationAggregatorSourcesStatusRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    limit?: number;
    nextToken?: string;
    updateStatus?: AggregatedSourceStatusTypeEnum[];
}
