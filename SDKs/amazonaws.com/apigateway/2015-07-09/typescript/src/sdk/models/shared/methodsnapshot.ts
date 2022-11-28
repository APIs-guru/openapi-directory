import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MethodSnapshot
/** 
 * Represents a summary of a <a>Method</a> resource, given a particular date and time.
**/
export class MethodSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyRequired" })
  apiKeyRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authorizationType" })
  authorizationType?: string;
}
