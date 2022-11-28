import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListKeywordsForDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
