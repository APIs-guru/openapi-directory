import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OtaUpdateSummary
/** 
 * An OTA update summary.
**/
export class OtaUpdateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=otaUpdateArn" })
  otaUpdateArn?: string;

  @Metadata({ data: "json, name=otaUpdateId" })
  otaUpdateId?: string;
}
