import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VolumeFilter } from "./volumefilter";


export class DescribeVolumesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.VolumeFilter })
  filters?: VolumeFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=VolumeIds" })
  volumeIds?: string[];
}
