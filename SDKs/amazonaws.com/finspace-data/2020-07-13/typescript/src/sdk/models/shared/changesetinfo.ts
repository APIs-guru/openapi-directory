import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=changeType" })
  changeType?: ChangeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=changesetArn" })
  changesetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=changesetLabels" })
  changesetLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=createTimestamp" })
  createTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=errorInfo" })
  errorInfo?: ErrorInfo;

  @SpeakeasyMetadata({ data: "json, name=formatParams" })
  formatParams?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=formatType" })
  formatType?: FormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceParams" })
  sourceParams?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChangesetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedByChangesetId" })
  updatedByChangesetId?: string;

  @SpeakeasyMetadata({ data: "json, name=updatesChangesetId" })
  updatesChangesetId?: string;
}
