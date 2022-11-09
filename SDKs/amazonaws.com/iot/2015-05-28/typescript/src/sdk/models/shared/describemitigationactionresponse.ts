import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MitigationActionParams } from "./mitigationactionparams";
import { MitigationActionTypeEnum } from "./mitigationactiontypeenum";


export class DescribeMitigationActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionArn" })
  actionArn?: string;

  @Metadata({ data: "json, name=actionId" })
  actionId?: string;

  @Metadata({ data: "json, name=actionName" })
  actionName?: string;

  @Metadata({ data: "json, name=actionParams" })
  actionParams?: MitigationActionParams;

  @Metadata({ data: "json, name=actionType" })
  actionType?: MitigationActionTypeEnum;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
