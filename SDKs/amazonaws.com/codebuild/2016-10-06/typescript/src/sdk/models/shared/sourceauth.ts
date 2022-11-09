import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceAuthTypeEnum } from "./sourceauthtypeenum";


// SourceAuth
/** 
 * <p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p>
**/
export class SourceAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=type" })
  type: SourceAuthTypeEnum;
}
