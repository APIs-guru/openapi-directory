import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";



export class DescribeClientAuthenticationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ClientAuthenticationTypeEnum;
}
