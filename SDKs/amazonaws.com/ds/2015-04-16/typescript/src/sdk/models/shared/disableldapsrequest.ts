import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LdapsTypeEnum } from "./ldapstypeenum";



export class DisableLdapsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: LdapsTypeEnum;
}
