import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestUploadCredentialsInput
/** 
 * Represents the input for a request operation.
**/
export class RequestUploadCredentialsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildId" })
  buildId: string;
}
