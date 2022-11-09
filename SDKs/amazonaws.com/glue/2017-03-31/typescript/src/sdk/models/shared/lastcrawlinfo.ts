import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LastCrawlStatusEnum } from "./lastcrawlstatusenum";


// LastCrawlInfo
/** 
 * Status and error information about the most recent crawl.
**/
export class LastCrawlInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=LogGroup" })
  logGroup?: string;

  @Metadata({ data: "json, name=LogStream" })
  logStream?: string;

  @Metadata({ data: "json, name=MessagePrefix" })
  messagePrefix?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: LastCrawlStatusEnum;
}
