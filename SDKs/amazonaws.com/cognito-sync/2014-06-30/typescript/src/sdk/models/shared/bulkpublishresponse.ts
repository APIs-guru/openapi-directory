import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BulkPublishResponse
/** 
 * The output for the BulkPublish operation.
**/
export class BulkPublishResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;
}
