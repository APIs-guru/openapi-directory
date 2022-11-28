import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
import { UpdateParam } from "./updateparam";
import { UpdateStatusEnum } from "./updatestatusenum";
import { UpdateTypeEnum } from "./updatetypeenum";



// Update
/** 
 * An object representing an asynchronous update.
**/
export class Update extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorDetail })
  errors?: ErrorDetail[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=params", elemType: UpdateParam })
  params?: UpdateParam[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateTypeEnum;
}
