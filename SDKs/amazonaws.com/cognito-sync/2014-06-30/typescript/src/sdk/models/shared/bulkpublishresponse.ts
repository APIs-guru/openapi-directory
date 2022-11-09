import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BulkPublishResponse
/** 
 * The output for the BulkPublish operation.
**/
export class BulkPublishResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;
}
