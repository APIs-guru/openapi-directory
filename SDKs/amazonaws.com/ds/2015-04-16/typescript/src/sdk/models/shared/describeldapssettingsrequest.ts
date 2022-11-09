import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";


export class DescribeLdapsSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Type" })
  type?: LdapsTypeEnum;
}
