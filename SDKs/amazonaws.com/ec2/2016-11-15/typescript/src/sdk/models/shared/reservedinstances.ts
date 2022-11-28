import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// ReservedInstances
/** 
 * Describes a Reserved Instance.
**/
export class ReservedInstances extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  currencyCode?: CurrencyCodeValuesEnum;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  end?: Date;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  instanceCount?: number;

  @SpeakeasyMetadata()
  instanceTenancy?: TenancyEnum;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  offeringClass?: OfferingClassTypeEnum;

  @SpeakeasyMetadata()
  offeringType?: OfferingTypeValuesEnum;

  @SpeakeasyMetadata()
  productDescription?: RiProductDescriptionEnum;

  @SpeakeasyMetadata({ elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @SpeakeasyMetadata()
  reservedInstancesId?: string;

  @SpeakeasyMetadata()
  scope?: ScopeEnum;

  @SpeakeasyMetadata()
  start?: Date;

  @SpeakeasyMetadata()
  state?: ReservedInstanceStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  usagePrice?: number;
}
