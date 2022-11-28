import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Address
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=Address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=Address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=Address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=County" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Province" })
  province?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
