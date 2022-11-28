import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BulkPublishStatusEnum } from "./bulkpublishstatusenum";



// GetBulkPublishDetailsResponse
/** 
 * The output for the GetBulkPublishDetails operation.
**/
export class GetBulkPublishDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BulkPublishCompleteTime" })
  bulkPublishCompleteTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=BulkPublishStartTime" })
  bulkPublishStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=BulkPublishStatus" })
  bulkPublishStatus?: BulkPublishStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;
}
