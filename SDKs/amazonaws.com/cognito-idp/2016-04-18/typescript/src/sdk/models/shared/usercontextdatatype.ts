import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserContextDataType
/** 
 * Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
**/
export class UserContextDataType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncodedData" })
  encodedData?: string;
}
