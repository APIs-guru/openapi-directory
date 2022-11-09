import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";


export class EnableLdapsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=Type" })
  type: LdapsTypeEnum;
}
