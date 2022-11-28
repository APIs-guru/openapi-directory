import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticGpus } from "./elasticgpus";
export declare class DescribeElasticGpusResult extends SpeakeasyBase {
    elasticGpuSet?: ElasticGpus[];
    maxResults?: number;
    nextToken?: string;
}
