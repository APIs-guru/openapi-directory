import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorDetails
/** 
 * Represents information about an error in AWS CodePipeline.
**/
export class ErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
