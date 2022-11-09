import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BulkPublishStatusEnum } from "./bulkpublishstatusenum";


// GetBulkPublishDetailsResponse
/** 
 * The output for the GetBulkPublishDetails operation.
**/
export class GetBulkPublishDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BulkPublishCompleteTime" })
  bulkPublishCompleteTime?: Date;

  @Metadata({ data: "json, name=BulkPublishStartTime" })
  bulkPublishStartTime?: Date;

  @Metadata({ data: "json, name=BulkPublishStatus" })
  bulkPublishStatus?: BulkPublishStatusEnum;

  @Metadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;
}
