import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceInsightHealth } from "./serviceinsighthealth";
import { ServiceNameEnum } from "./servicenameenum";



// ServiceHealth
/** 
 * Represents the health of an AWS service.
**/
export class ServiceHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Insight" })
  insight?: ServiceInsightHealth;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: ServiceNameEnum;
}
