import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";
import { UpdateParam } from "./updateparam";
import { UpdateStatusEnum } from "./updatestatusenum";
import { UpdateTypeEnum } from "./updatetypeenum";
/**
 * An object representing an asynchronous update.
**/
export declare class Update extends SpeakeasyBase {
    createdAt?: Date;
    errors?: ErrorDetail[];
    id?: string;
    params?: UpdateParam[];
    status?: UpdateStatusEnum;
    type?: UpdateTypeEnum;
}
