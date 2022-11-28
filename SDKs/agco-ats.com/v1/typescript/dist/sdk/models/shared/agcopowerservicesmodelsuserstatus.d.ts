import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgcoPowerServicesModelsUserStatusStateEnum {
    Active = "Active",
    Inactive = "Inactive",
    None = "None"
}
/**
 * Status of a voucher in the AGCO Power system
**/
export declare class AgcoPowerServicesModelsUserStatus extends SpeakeasyBase {
    dealerCode: string;
    state?: AgcoPowerServicesModelsUserStatusStateEnum;
    voucherCode: string;
}
