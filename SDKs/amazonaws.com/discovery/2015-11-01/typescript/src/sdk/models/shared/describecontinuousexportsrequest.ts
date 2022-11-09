import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeContinuousExportsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportIds" })
  exportIds?: string[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
