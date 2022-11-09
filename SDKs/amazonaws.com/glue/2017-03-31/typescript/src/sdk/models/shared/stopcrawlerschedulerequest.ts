import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopCrawlerScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerName" })
  crawlerName: string;
}
