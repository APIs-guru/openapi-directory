import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
export declare class CreatePermissionRequest extends SpeakeasyBase {
    actions: ActionTypeEnum[];
    certificateAuthorityArn: string;
    principal: string;
    sourceAccount?: string;
}
