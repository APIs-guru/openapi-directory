import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";



// ImportTask
/** 
 * An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
**/
export class ImportTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationImportFailure" })
  applicationImportFailure?: number;

  @SpeakeasyMetadata({ data: "json, name=applicationImportSuccess" })
  applicationImportSuccess?: number;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=errorsAndFailedEntriesZip" })
  errorsAndFailedEntriesZip?: string;

  @SpeakeasyMetadata({ data: "json, name=importCompletionTime" })
  importCompletionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=importDeletedTime" })
  importDeletedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=importRequestTime" })
  importRequestTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=importTaskId" })
  importTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=importUrl" })
  importUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverImportFailure" })
  serverImportFailure?: number;

  @SpeakeasyMetadata({ data: "json, name=serverImportSuccess" })
  serverImportSuccess?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ImportStatusEnum;
}
