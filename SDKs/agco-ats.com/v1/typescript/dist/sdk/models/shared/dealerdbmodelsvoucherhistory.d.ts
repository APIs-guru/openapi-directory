import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DealerDbModelsVoucherHistoryTypeEnum {
    Commercial = "Commercial",
    Internal = "Internal",
    Temporary = "Temporary",
    RightToRepair = "RightToRepair"
}
export declare class DealerDbModelsVoucherHistory extends SpeakeasyBase {
    changedDate?: Date;
    createdDate?: Date;
    dealerCode?: string;
    deleted?: boolean;
    email?: string;
    expirationDate?: Date;
    id?: number;
    licenseTo?: string;
    modifiedBy?: string;
    orderNumber?: string;
    punched?: boolean;
    punchedDate?: Date;
    purpose?: string;
    type?: DealerDbModelsVoucherHistoryTypeEnum;
    voucherCode?: string;
}
