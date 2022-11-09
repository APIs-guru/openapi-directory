import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetIdResponse
/** 
 * Returned in response to a GetId request.
**/
export class GetIdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;
}
