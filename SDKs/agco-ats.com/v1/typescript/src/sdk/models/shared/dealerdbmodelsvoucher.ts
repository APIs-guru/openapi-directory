import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DealerDbModelsVoucherTypeEnum {
    Commercial = "Commercial",
    Internal = "Internal",
    Temporary = "Temporary",
    RightToRepair = "RightToRepair"
}


// DealerDbModelsVoucher
/** 
 * A voucher for EDT activation
**/
export class DealerDbModelsVoucher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate, form, name=CreatedDate;" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Deleted, form, name=Deleted;" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate, form, name=ExpirationDate;" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LicenseTo, form, name=LicenseTo;" })
  licenseTo?: string;

  @SpeakeasyMetadata({ data: "json, name=ModifiedBy, form, name=ModifiedBy;" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderNumber, form, name=OrderNumber;" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Punched, form, name=Punched;" })
  punched?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PunchedDate, form, name=PunchedDate;" })
  punchedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Purpose, form, name=Purpose;" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=Type, form, name=Type;" })
  type?: DealerDbModelsVoucherTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" })
  voucherCode?: string;
}
