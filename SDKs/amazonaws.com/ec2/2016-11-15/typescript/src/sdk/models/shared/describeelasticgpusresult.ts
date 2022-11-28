import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticGpus } from "./elasticgpus";



export class DescribeElasticGpusResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ElasticGpus })
  elasticGpuSet?: ElasticGpus[];

  @SpeakeasyMetadata()
  maxResults?: number;

  @SpeakeasyMetadata()
  nextToken?: string;
}
