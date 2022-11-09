import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceInsightHealth } from "./serviceinsighthealth";
import { ServiceNameEnum } from "./servicenameenum";


// ServiceHealth
/** 
 * Represents the health of an AWS service.
**/
export class ServiceHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=Insight" })
  insight?: ServiceInsightHealth;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: ServiceNameEnum;
}
