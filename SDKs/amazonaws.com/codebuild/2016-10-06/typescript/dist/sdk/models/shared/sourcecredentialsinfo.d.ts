import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ServerTypeEnum } from "./servertypeenum";
/**
 *  Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository.
**/
export declare class SourceCredentialsInfo extends SpeakeasyBase {
    arn?: string;
    authType?: AuthTypeEnum;
    serverType?: ServerTypeEnum;
}
