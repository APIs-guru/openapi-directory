import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidTaggingRequestException
/** 
 * Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.
**/
export class InvalidTaggingRequestException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
