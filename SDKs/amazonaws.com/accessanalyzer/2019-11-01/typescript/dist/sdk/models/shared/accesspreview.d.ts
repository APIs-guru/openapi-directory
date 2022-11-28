import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { AccessPreviewStatusEnum } from "./accesspreviewstatusenum";
import { AccessPreviewStatusReason } from "./accesspreviewstatusreason";
/**
 * Contains information about an access preview.
**/
export declare class AccessPreview extends SpeakeasyBase {
    analyzerArn: string;
    configurations: Map<string, Configuration>;
    createdAt: Date;
    id: string;
    status: AccessPreviewStatusEnum;
    statusReason?: AccessPreviewStatusReason;
}
