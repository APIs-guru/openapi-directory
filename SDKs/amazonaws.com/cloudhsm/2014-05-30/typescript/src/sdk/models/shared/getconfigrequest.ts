import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientVersionEnum } from "./clientversionenum";


export class GetConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientArn" })
  clientArn: string;

  @Metadata({ data: "json, name=ClientVersion" })
  clientVersion: ClientVersionEnum;

  @Metadata({ data: "json, name=HapgList" })
  hapgList: string[];
}
