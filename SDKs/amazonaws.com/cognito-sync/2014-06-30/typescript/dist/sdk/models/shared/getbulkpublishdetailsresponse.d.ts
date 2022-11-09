import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BulkPublishStatusEnum } from "./bulkpublishstatusenum";
/**
 * The output for the GetBulkPublishDetails operation.
**/
export declare class GetBulkPublishDetailsResponse extends SpeakeasyBase {
    bulkPublishCompleteTime?: Date;
    bulkPublishStartTime?: Date;
    bulkPublishStatus?: BulkPublishStatusEnum;
    failureMessage?: string;
    identityPoolId?: string;
}
