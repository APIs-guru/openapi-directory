import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";



// GetLoggingOptionsResponse
/** 
 * The output from the GetLoggingOptions operation.
**/
export class GetLoggingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel?: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
