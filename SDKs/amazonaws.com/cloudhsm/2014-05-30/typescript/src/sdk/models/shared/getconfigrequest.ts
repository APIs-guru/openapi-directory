import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVersionEnum } from "./clientversionenum";



export class GetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientArn" })
  clientArn: string;

  @SpeakeasyMetadata({ data: "json, name=ClientVersion" })
  clientVersion: ClientVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=HapgList" })
  hapgList: string[];
}
