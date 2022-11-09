import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartCrawlerScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerName" })
  crawlerName: string;
}
