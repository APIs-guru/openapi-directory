import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgcoPowerServicesModelsEcuStateEnum {
    Active = "Active",
    Inactive = "Inactive",
    Damaged = "Damaged"
}
/**
 * An AGCO Power ECU
**/
export declare class AgcoPowerServicesModelsEcu extends SpeakeasyBase {
    activationCode?: string;
    damagedDescription?: string;
    engineSerialNumber: string;
    replacesEcuSerialNumber?: string;
    serialNumber: string;
    state: AgcoPowerServicesModelsEcuStateEnum;
}
