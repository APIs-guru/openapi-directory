import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { TenancyEnum } from "./tenancyenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { OfferingClassTypeEnum } from "./offeringclasstypeenum";
import { OfferingTypeValuesEnum } from "./offeringtypevaluesenum";
import { PricingDetail } from "./pricingdetail";
import { RiProductDescriptionEnum } from "./riproductdescriptionenum";
import { RecurringCharge } from "./recurringcharge";
import { ScopeEnum } from "./scopeenum";
/**
 * Describes a Reserved Instance offering.
**/
export declare class ReservedInstancesOffering extends SpeakeasyBase {
    availabilityZone?: string;
    currencyCode?: CurrencyCodeValuesEnum;
    duration?: number;
    fixedPrice?: number;
    instanceTenancy?: TenancyEnum;
    instanceType?: InstanceTypeEnum;
    marketplace?: boolean;
    offeringClass?: OfferingClassTypeEnum;
    offeringType?: OfferingTypeValuesEnum;
    pricingDetails?: PricingDetail[];
    productDescription?: RiProductDescriptionEnum;
    recurringCharges?: RecurringCharge[];
    reservedInstancesOfferingId?: string;
    scope?: ScopeEnum;
    usagePrice?: number;
}
