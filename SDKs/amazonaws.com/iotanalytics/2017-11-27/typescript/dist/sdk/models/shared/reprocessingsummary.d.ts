import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReprocessingStatusEnum } from "./reprocessingstatusenum";
/**
 * Information about pipeline reprocessing.
**/
export declare class ReprocessingSummary extends SpeakeasyBase {
    creationTime?: Date;
    id?: string;
    status?: ReprocessingStatusEnum;
}
