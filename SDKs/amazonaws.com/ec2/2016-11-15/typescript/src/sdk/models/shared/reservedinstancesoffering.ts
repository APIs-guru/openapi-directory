import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { TenancyEnum } from "./tenancyenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { OfferingClassTypeEnum } from "./offeringclasstypeenum";
import { OfferingTypeValuesEnum } from "./offeringtypevaluesenum";
import { PricingDetail } from "./pricingdetail";
import { RiProductDescriptionEnum } from "./riproductdescriptionenum";
import { RecurringCharge } from "./recurringcharge";
import { ScopeEnum } from "./scopeenum";



// ReservedInstancesOffering
/** 
 * Describes a Reserved Instance offering.
**/
export class ReservedInstancesOffering extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  currencyCode?: CurrencyCodeValuesEnum;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  instanceTenancy?: TenancyEnum;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  marketplace?: boolean;

  @SpeakeasyMetadata()
  offeringClass?: OfferingClassTypeEnum;

  @SpeakeasyMetadata()
  offeringType?: OfferingTypeValuesEnum;

  @SpeakeasyMetadata({ elemType: PricingDetail })
  pricingDetails?: PricingDetail[];

  @SpeakeasyMetadata()
  productDescription?: RiProductDescriptionEnum;

  @SpeakeasyMetadata({ elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @SpeakeasyMetadata()
  reservedInstancesOfferingId?: string;

  @SpeakeasyMetadata()
  scope?: ScopeEnum;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
