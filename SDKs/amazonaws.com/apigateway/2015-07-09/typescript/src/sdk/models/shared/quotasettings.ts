import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QuotaPeriodTypeEnum } from "./quotaperiodtypeenum";


// QuotaSettings
/** 
 * Quotas configured for a usage plan.
**/
export class QuotaSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=period" })
  period?: QuotaPeriodTypeEnum;
}
