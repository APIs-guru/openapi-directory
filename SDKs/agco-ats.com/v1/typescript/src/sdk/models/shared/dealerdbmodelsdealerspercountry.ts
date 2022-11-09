import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DealerDbModelsDealersPerCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Country" })
  country?: string;
}
