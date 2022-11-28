import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceInsightHealth } from "./serviceinsighthealth";
import { ServiceNameEnum } from "./servicenameenum";
/**
 * Represents the health of an AWS service.
**/
export declare class ServiceHealth extends SpeakeasyBase {
    insight?: ServiceInsightHealth;
    serviceName?: ServiceNameEnum;
}
