import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransformFilterCriteria } from "./transformfiltercriteria";
import { TransformSortCriteria } from "./transformsortcriteria";


export class ListMlTransformsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: TransformFilterCriteria;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Sort" })
  sort?: TransformSortCriteria;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
