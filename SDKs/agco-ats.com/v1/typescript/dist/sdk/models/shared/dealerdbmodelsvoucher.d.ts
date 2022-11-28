import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DealerDbModelsVoucherTypeEnum {
    Commercial = "Commercial",
    Internal = "Internal",
    Temporary = "Temporary",
    RightToRepair = "RightToRepair"
}
/**
 * A voucher for EDT activation
**/
export declare class DealerDbModelsVoucher extends SpeakeasyBase {
    createdDate?: Date;
    dealerCode?: string;
    deleted?: boolean;
    email?: string;
    expirationDate?: Date;
    licenseTo?: string;
    modifiedBy?: string;
    orderNumber?: string;
    punched?: boolean;
    punchedDate?: Date;
    purpose?: string;
    type?: DealerDbModelsVoucherTypeEnum;
    voucherCode?: string;
}
