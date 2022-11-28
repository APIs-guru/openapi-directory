import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OtaUpdateSummary
/** 
 * An OTA update summary.
**/
export class OtaUpdateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=otaUpdateArn" })
  otaUpdateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=otaUpdateId" })
  otaUpdateId?: string;
}
