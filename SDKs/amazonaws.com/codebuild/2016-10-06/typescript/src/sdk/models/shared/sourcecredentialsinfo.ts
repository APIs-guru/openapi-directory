import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ServerTypeEnum } from "./servertypeenum";



// SourceCredentialsInfo
/** 
 *  Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. 
**/
export class SourceCredentialsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType?: AuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serverType" })
  serverType?: ServerTypeEnum;
}
