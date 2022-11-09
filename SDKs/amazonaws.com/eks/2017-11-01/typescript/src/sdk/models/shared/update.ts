import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorDetail } from "./errordetail";
import { UpdateParam } from "./updateparam";
import { UpdateStatusEnum } from "./updatestatusenum";
import { UpdateTypeEnum } from "./updatetypeenum";


// Update
/** 
 * An object representing an asynchronous update.
**/
export class Update extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=errors", elemType: shared.ErrorDetail })
  errors?: ErrorDetail[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=params", elemType: shared.UpdateParam })
  params?: UpdateParam[];

  @Metadata({ data: "json, name=status" })
  status?: UpdateStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: UpdateTypeEnum;
}
