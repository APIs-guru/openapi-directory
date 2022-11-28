import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartCrawlerScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerName" })
  crawlerName: string;
}
