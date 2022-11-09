import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DealerDbModelsEdtLiteRegistration
/** 
 * Registration for an EDT Lite
**/
export class DealerDbModelsEdtLiteRegistration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode?: string;

  @Metadata({ data: "json, name=ExpirationDate, form, name=ExpirationDate;" })
  expirationDate: Date;

  @Metadata({ data: "json, name=InstanceID, form, name=InstanceID;" })
  instanceId: string;

  @Metadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" })
  voucherCode: string;
}
