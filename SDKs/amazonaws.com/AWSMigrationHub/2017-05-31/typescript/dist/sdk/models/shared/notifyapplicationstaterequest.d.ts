import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";
export declare class NotifyApplicationStateRequest extends SpeakeasyBase {
    applicationId: string;
    dryRun?: boolean;
    status: ApplicationStatusEnum;
    updateDateTime?: Date;
}
