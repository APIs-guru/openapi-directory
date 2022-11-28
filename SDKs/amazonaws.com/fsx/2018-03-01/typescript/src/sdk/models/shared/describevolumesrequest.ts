import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeFilter } from "./volumefilter";



export class DescribeVolumesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: VolumeFilter })
  filters?: VolumeFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeIds" })
  volumeIds?: string[];
}
