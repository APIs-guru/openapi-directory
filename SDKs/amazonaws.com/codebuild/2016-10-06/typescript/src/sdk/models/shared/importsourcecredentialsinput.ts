import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ServerTypeEnum } from "./servertypeenum";



export class ImportSourceCredentialsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType: AuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serverType" })
  serverType: ServerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=shouldOverwrite" })
  shouldOverwrite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
