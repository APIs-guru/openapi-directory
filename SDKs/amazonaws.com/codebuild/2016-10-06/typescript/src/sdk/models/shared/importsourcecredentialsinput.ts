import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ServerTypeEnum } from "./servertypeenum";


export class ImportSourceCredentialsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=authType" })
  authType: AuthTypeEnum;

  @Metadata({ data: "json, name=serverType" })
  serverType: ServerTypeEnum;

  @Metadata({ data: "json, name=shouldOverwrite" })
  shouldOverwrite?: boolean;

  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
