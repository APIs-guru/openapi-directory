import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComprehendMedicalAsyncJobFilter } from "./comprehendmedicalasyncjobfilter";


export class ListEntitiesDetectionV2JobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: ComprehendMedicalAsyncJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
