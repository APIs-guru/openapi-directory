import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DealerDbModelsDealer extends SpeakeasyBase {
  @Metadata({ data: "json, name=BillingAddress" })
  billingAddress?: string;

  @Metadata({ data: "json, name=BillingAddress2" })
  billingAddress2?: string;

  @Metadata({ data: "json, name=BillingAddress3" })
  billingAddress3?: string;

  @Metadata({ data: "json, name=BillingAddress4" })
  billingAddress4?: string;

  @Metadata({ data: "json, name=BillingCity" })
  billingCity?: string;

  @Metadata({ data: "json, name=BillingCountry" })
  billingCountry?: string;

  @Metadata({ data: "json, name=BillingCountryCode" })
  billingCountryCode?: string;

  @Metadata({ data: "json, name=BillingState" })
  billingState?: string;

  @Metadata({ data: "json, name=BillingZip" })
  billingZip?: string;

  @Metadata({ data: "json, name=Brands" })
  brands?: string[];

  @Metadata({ data: "json, name=DealerCode" })
  dealerCode?: string;

  @Metadata({ data: "json, name=DealerName" })
  dealerName?: string;

  @Metadata({ data: "json, name=DealerStatus" })
  dealerStatus?: string;

  @Metadata({ data: "json, name=DealerStatusUpdateDate" })
  dealerStatusUpdateDate?: string;

  @Metadata({ data: "json, name=Filler" })
  filler?: string;

  @Metadata({ data: "json, name=IsValid" })
  isValid?: boolean;

  @Metadata({ data: "json, name=LanguagePreference" })
  languagePreference?: string;

  @Metadata({ data: "json, name=Region1" })
  region1?: string;

  @Metadata({ data: "json, name=Region2" })
  region2?: string;

  @Metadata({ data: "json, name=RegionMapping" })
  regionMapping?: string;

  @Metadata({ data: "json, name=RoleBrand" })
  roleBrand?: string;

  @Metadata({ data: "json, name=ShippingAddress2" })
  shippingAddress2?: string;

  @Metadata({ data: "json, name=ShippingAddress3" })
  shippingAddress3?: string;

  @Metadata({ data: "json, name=ShippingAddress4" })
  shippingAddress4?: string;

  @Metadata({ data: "json, name=ShippingCity" })
  shippingCity?: string;

  @Metadata({ data: "json, name=ShippingCountry" })
  shippingCountry?: string;

  @Metadata({ data: "json, name=ShippingState" })
  shippingState?: string;

  @Metadata({ data: "json, name=ShippingStreet" })
  shippingStreet?: string;

  @Metadata({ data: "json, name=ShippingZip" })
  shippingZip?: string;

  @Metadata({ data: "json, name=Telephone" })
  telephone?: string;

  @Metadata({ data: "json, name=VATCode" })
  vatCode?: string;
}
