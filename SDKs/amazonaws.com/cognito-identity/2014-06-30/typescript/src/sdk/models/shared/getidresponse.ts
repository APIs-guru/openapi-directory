import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetIdResponse
/** 
 * Returned in response to a GetId request.
**/
export class GetIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;
}
