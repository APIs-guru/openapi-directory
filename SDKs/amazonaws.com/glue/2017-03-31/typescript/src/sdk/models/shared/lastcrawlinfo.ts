import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastCrawlStatusEnum } from "./lastcrawlstatusenum";



// LastCrawlInfo
/** 
 * Status and error information about the most recent crawl.
**/
export class LastCrawlInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LogGroup" })
  logGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=LogStream" })
  logStream?: string;

  @SpeakeasyMetadata({ data: "json, name=MessagePrefix" })
  messagePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: LastCrawlStatusEnum;
}
