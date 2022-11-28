import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";



// UpdateUserAttributesResponse
/** 
 * Represents the response from the server for the request to update user attributes.
**/
export class UpdateUserAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeDeliveryDetailsList", elemType: CodeDeliveryDetailsType })
  codeDeliveryDetailsList?: CodeDeliveryDetailsType[];
}
