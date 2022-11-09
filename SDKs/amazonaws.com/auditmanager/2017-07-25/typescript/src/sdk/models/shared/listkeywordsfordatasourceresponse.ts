import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListKeywordsForDataSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keywords" })
  keywords?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
