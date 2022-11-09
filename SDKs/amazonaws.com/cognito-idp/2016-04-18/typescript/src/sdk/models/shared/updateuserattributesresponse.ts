import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";


// UpdateUserAttributesResponse
/** 
 * Represents the response from the server for the request to update user attributes.
**/
export class UpdateUserAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeDeliveryDetailsList", elemType: shared.CodeDeliveryDetailsType })
  codeDeliveryDetailsList?: CodeDeliveryDetailsType[];
}
