import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportStatusEnum } from "./importstatusenum";


// ImportTask
/** 
 * An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
**/
export class ImportTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationImportFailure" })
  applicationImportFailure?: number;

  @Metadata({ data: "json, name=applicationImportSuccess" })
  applicationImportSuccess?: number;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=errorsAndFailedEntriesZip" })
  errorsAndFailedEntriesZip?: string;

  @Metadata({ data: "json, name=importCompletionTime" })
  importCompletionTime?: Date;

  @Metadata({ data: "json, name=importDeletedTime" })
  importDeletedTime?: Date;

  @Metadata({ data: "json, name=importRequestTime" })
  importRequestTime?: Date;

  @Metadata({ data: "json, name=importTaskId" })
  importTaskId?: string;

  @Metadata({ data: "json, name=importUrl" })
  importUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serverImportFailure" })
  serverImportFailure?: number;

  @Metadata({ data: "json, name=serverImportSuccess" })
  serverImportSuccess?: number;

  @Metadata({ data: "json, name=status" })
  status?: ImportStatusEnum;
}
