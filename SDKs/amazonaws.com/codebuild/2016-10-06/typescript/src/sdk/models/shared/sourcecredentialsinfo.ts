import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ServerTypeEnum } from "./servertypeenum";


// SourceCredentialsInfo
/** 
 *  Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. 
**/
export class SourceCredentialsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=authType" })
  authType?: AuthTypeEnum;

  @Metadata({ data: "json, name=serverType" })
  serverType?: ServerTypeEnum;
}
