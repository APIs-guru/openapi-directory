import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MethodSnapshot
/** 
 * Represents a summary of a <a>Method</a> resource, given a particular date and time.
**/
export class MethodSnapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyRequired" })
  apiKeyRequired?: boolean;

  @Metadata({ data: "json, name=authorizationType" })
  authorizationType?: string;
}
