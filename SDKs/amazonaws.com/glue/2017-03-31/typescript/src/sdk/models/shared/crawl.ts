import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrawlStateEnum } from "./crawlstateenum";



// Crawl
/** 
 * The details of a crawl in the workflow.
**/
export class Crawl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LogGroup" })
  logGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=LogStream" })
  logStream?: string;

  @SpeakeasyMetadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CrawlStateEnum;
}
