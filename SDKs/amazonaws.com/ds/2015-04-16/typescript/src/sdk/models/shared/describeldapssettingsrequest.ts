import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";



export class DescribeLdapsSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: LdapsTypeEnum;
}
