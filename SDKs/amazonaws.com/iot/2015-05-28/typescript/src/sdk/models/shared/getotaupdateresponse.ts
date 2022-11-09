import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OtaUpdateInfo } from "./otaupdateinfo";


export class GetOtaUpdateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=otaUpdateInfo" })
  otaUpdateInfo?: OtaUpdateInfo;
}
