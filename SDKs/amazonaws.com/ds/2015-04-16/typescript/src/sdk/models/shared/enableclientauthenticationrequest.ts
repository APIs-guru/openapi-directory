import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";



export class EnableClientAuthenticationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ClientAuthenticationTypeEnum;
}
