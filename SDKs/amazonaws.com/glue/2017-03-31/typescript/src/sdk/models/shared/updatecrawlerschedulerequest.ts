import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCrawlerScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerName" })
  crawlerName: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: string;
}
