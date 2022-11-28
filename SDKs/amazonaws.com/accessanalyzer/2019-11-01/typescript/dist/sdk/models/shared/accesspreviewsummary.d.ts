import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewStatusEnum } from "./accesspreviewstatusenum";
import { AccessPreviewStatusReason } from "./accesspreviewstatusreason";
/**
 * Contains a summary of information about an access preview.
**/
export declare class AccessPreviewSummary extends SpeakeasyBase {
    analyzerArn: string;
    createdAt: Date;
    id: string;
    status: AccessPreviewStatusEnum;
    statusReason?: AccessPreviewStatusReason;
}
