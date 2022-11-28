import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DealerDbModelsDealersPerCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;
}
