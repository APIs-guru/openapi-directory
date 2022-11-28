import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MitigationActionParams } from "./mitigationactionparams";
import { MitigationActionTypeEnum } from "./mitigationactiontypeenum";



export class DescribeMitigationActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionArn" })
  actionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=actionId" })
  actionId?: string;

  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=actionParams" })
  actionParams?: MitigationActionParams;

  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: MitigationActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
