import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestUploadCredentialsInput
/** 
 * Represents the input for a request operation.
**/
export class RequestUploadCredentialsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildId" })
  buildId: string;
}
