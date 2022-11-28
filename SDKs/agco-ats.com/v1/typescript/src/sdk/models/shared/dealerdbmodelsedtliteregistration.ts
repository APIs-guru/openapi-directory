import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DealerDbModelsEdtLiteRegistration
/** 
 * Registration for an EDT Lite
**/
export class DealerDbModelsEdtLiteRegistration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate, form, name=ExpirationDate;" })
  expirationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=InstanceID, form, name=InstanceID;" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" })
  voucherCode: string;
}
