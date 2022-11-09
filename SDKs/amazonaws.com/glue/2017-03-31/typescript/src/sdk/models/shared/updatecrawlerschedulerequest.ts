import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCrawlerScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerName" })
  crawlerName: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: string;
}
