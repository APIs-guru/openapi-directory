import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceAuthTypeEnum } from "./sourceauthtypeenum";



// SourceAuth
/** 
 * <p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p>
**/
export class SourceAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: SourceAuthTypeEnum;
}
