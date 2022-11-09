import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorDetails
/** 
 * Represents information about an error in AWS CodePipeline.
**/
export class ErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
