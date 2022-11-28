import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OtaUpdateSummary } from "./otaupdatesummary";



export class ListOtaUpdatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=otaUpdates", elemType: OtaUpdateSummary })
  otaUpdates?: OtaUpdateSummary[];
}
