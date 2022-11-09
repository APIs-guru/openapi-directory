import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CrawlStateEnum } from "./crawlstateenum";


// Crawl
/** 
 * The details of a crawl in the workflow.
**/
export class Crawl extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=LogGroup" })
  logGroup?: string;

  @Metadata({ data: "json, name=LogStream" })
  logStream?: string;

  @Metadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @Metadata({ data: "json, name=State" })
  state?: CrawlStateEnum;
}
