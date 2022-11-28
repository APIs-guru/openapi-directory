import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DealerDbModelsDealer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BillingAddress" })
  billingAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingAddress2" })
  billingAddress2?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingAddress3" })
  billingAddress3?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingAddress4" })
  billingAddress4?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingCity" })
  billingCity?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingCountry" })
  billingCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingCountryCode" })
  billingCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingState" })
  billingState?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingZip" })
  billingZip?: string;

  @SpeakeasyMetadata({ data: "json, name=Brands" })
  brands?: string[];

  @SpeakeasyMetadata({ data: "json, name=DealerCode" })
  dealerCode?: string;

  @SpeakeasyMetadata({ data: "json, name=DealerName" })
  dealerName?: string;

  @SpeakeasyMetadata({ data: "json, name=DealerStatus" })
  dealerStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=DealerStatusUpdateDate" })
  dealerStatusUpdateDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Filler" })
  filler?: string;

  @SpeakeasyMetadata({ data: "json, name=IsValid" })
  isValid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LanguagePreference" })
  languagePreference?: string;

  @SpeakeasyMetadata({ data: "json, name=Region1" })
  region1?: string;

  @SpeakeasyMetadata({ data: "json, name=Region2" })
  region2?: string;

  @SpeakeasyMetadata({ data: "json, name=RegionMapping" })
  regionMapping?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleBrand" })
  roleBrand?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAddress2" })
  shippingAddress2?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAddress3" })
  shippingAddress3?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAddress4" })
  shippingAddress4?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingCity" })
  shippingCity?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingCountry" })
  shippingCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingState" })
  shippingState?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingStreet" })
  shippingStreet?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingZip" })
  shippingZip?: string;

  @SpeakeasyMetadata({ data: "json, name=Telephone" })
  telephone?: string;

  @SpeakeasyMetadata({ data: "json, name=VATCode" })
  vatCode?: string;
}
