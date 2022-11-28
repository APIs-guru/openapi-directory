import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransformFilterCriteria } from "./transformfiltercriteria";
import { TransformSortCriteria } from "./transformsortcriteria";



export class ListMlTransformsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: TransformFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Sort" })
  sort?: TransformSortCriteria;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
