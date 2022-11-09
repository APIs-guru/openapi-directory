import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LimitExceededException
/** 
 * Indicates that limits are exceeded. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/limits.html">Limits</a> for more information.
**/
export class LimitExceededException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
