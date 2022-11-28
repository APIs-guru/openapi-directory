import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { Purchase } from "./purchase";



export class GetHostReservationPurchasePreviewResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: CurrencyCodeValuesEnum;

  @SpeakeasyMetadata({ elemType: Purchase })
  purchase?: Purchase[];

  @SpeakeasyMetadata()
  totalHourlyPrice?: string;

  @SpeakeasyMetadata()
  totalUpfrontPrice?: string;
}
