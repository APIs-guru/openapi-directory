import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OtaUpdateInfo } from "./otaupdateinfo";



export class GetOtaUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=otaUpdateInfo" })
  otaUpdateInfo?: OtaUpdateInfo;
}
