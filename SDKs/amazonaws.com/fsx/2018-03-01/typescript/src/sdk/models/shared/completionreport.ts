import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportFormatEnum } from "./reportformatenum";
import { ReportScopeEnum } from "./reportscopeenum";


// CompletionReport
/** 
 * Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.
**/
export class CompletionReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=Format" })
  format?: ReportFormatEnum;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Scope" })
  scope?: ReportScopeEnum;
}
