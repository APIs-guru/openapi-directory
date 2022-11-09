import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";


export class EnableClientAuthenticationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=Type" })
  type: ClientAuthenticationTypeEnum;
}
