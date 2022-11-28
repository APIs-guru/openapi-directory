import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaPeriodTypeEnum } from "./quotaperiodtypeenum";



// QuotaSettings
/** 
 * Quotas configured for a usage plan.
**/
export class QuotaSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: QuotaPeriodTypeEnum;
}
