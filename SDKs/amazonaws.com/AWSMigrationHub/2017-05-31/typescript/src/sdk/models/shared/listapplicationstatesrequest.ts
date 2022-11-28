import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListApplicationStatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationIds" })
  applicationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
