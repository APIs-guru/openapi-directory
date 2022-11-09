import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";


// GetLoggingOptionsResponse
/** 
 * The output from the GetLoggingOptions operation.
**/
export class GetLoggingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logLevel" })
  logLevel?: LogLevelEnum;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
