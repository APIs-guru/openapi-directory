import { SpeakeasyBase } from "../../../internal/utils";
import { MitigationActionParams } from "./mitigationactionparams";
import { MitigationActionTypeEnum } from "./mitigationactiontypeenum";
export declare class DescribeMitigationActionResponse extends SpeakeasyBase {
    actionArn?: string;
    actionId?: string;
    actionName?: string;
    actionParams?: MitigationActionParams;
    actionType?: MitigationActionTypeEnum;
    creationDate?: Date;
    lastModifiedDate?: Date;
    roleArn?: string;
}
