import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopCrawlerScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerName" })
  crawlerName: string;
}
