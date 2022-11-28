import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Crawler } from "./crawler";



export class GetCrawlersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Crawlers", elemType: Crawler })
  crawlers?: Crawler[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
