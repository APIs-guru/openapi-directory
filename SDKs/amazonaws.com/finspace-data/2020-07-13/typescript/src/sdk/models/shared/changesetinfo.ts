import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChangeTypeEnum } from "./changetypeenum";
import { ErrorInfo } from "./errorinfo";
import { FormatTypeEnum } from "./formattypeenum";
import { SourceTypeEnum } from "./sourcetypeenum";
import { ChangesetStatusEnum } from "./changesetstatusenum";


// ChangesetInfo
/** 
 * A changeset is unit of data in a dataset.
**/
export class ChangesetInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeType" })
  changeType?: ChangeTypeEnum;

  @Metadata({ data: "json, name=changesetArn" })
  changesetArn?: string;

  @Metadata({ data: "json, name=changesetLabels" })
  changesetLabels?: Map<string, string>;

  @Metadata({ data: "json, name=createTimestamp" })
  createTimestamp?: Date;

  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=errorInfo" })
  errorInfo?: ErrorInfo;

  @Metadata({ data: "json, name=formatParams" })
  formatParams?: Map<string, string>;

  @Metadata({ data: "json, name=formatType" })
  formatType?: FormatTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=sourceParams" })
  sourceParams?: Map<string, string>;

  @Metadata({ data: "json, name=sourceType" })
  sourceType?: SourceTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: ChangesetStatusEnum;

  @Metadata({ data: "json, name=updatedByChangesetId" })
  updatedByChangesetId?: string;

  @Metadata({ data: "json, name=updatesChangesetId" })
  updatesChangesetId?: string;
}
