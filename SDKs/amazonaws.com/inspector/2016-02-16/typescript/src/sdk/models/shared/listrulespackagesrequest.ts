import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListRulesPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
