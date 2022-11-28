import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { TenancyEnum } from "./tenancyenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { OfferingClassTypeEnum } from "./offeringclasstypeenum";
import { OfferingTypeValuesEnum } from "./offeringtypevaluesenum";
import { RiProductDescriptionEnum } from "./riproductdescriptionenum";
import { RecurringCharge } from "./recurringcharge";
import { ScopeEnum } from "./scopeenum";
import { ReservedInstanceStateEnum } from "./reservedinstancestateenum";
import { Tag } from "./tag";
/**
 * Describes a Reserved Instance.
**/
export declare class ReservedInstances extends SpeakeasyBase {
    availabilityZone?: string;
    currencyCode?: CurrencyCodeValuesEnum;
    duration?: number;
    end?: Date;
    fixedPrice?: number;
    instanceCount?: number;
    instanceTenancy?: TenancyEnum;
    instanceType?: InstanceTypeEnum;
    offeringClass?: OfferingClassTypeEnum;
    offeringType?: OfferingTypeValuesEnum;
    productDescription?: RiProductDescriptionEnum;
    recurringCharges?: RecurringCharge[];
    reservedInstancesId?: string;
    scope?: ScopeEnum;
    start?: Date;
    state?: ReservedInstanceStateEnum;
    tags?: Tag[];
    usagePrice?: number;
}
