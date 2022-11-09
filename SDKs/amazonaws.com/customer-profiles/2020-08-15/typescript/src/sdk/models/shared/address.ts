import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Address
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address1" })
  address1?: string;

  @Metadata({ data: "json, name=Address2" })
  address2?: string;

  @Metadata({ data: "json, name=Address3" })
  address3?: string;

  @Metadata({ data: "json, name=Address4" })
  address4?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=County" })
  county?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Province" })
  province?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}
