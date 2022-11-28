import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum VouchersGetDeletedEnum {
    NotDeleted = "NotDeleted",
    Deleted = "Deleted",
    All = "All"
}
export declare enum VouchersGetTypeEnum {
    Commercial = "Commercial",
    Internal = "Internal",
    Temporary = "Temporary",
    RightToRepair = "RightToRepair"
}
export declare class VouchersGetQueryParams extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    dealerCode?: string;
    deleted?: VouchersGetDeletedEnum;
    email?: string;
    expirationAfter?: Date;
    expirationBefore?: Date;
    licenseTo?: string;
    modifiedBy?: string;
    orderNumber?: string;
    punched?: boolean;
    punchedAfter?: Date;
    punchedBefore?: Date;
    purpose?: string;
    type?: VouchersGetTypeEnum;
    limit?: number;
    offset?: number;
}
export declare class VouchersGetRequest extends SpeakeasyBase {
    queryParams: VouchersGetQueryParams;
}
export declare class VouchersGetResponse extends SpeakeasyBase {
    apiPagedResponseDealerDbModelsVoucher?: shared.ApiPagedResponseDealerDbModelsVoucher;
    contentType: string;
    statusCode: number;
}
