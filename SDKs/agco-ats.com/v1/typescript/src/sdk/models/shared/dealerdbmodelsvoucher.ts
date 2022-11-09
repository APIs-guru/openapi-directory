import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DealerDbModelsVoucherTypeEnum {
    Commercial = "Commercial"
,    Internal = "Internal"
,    Temporary = "Temporary"
,    RightToRepair = "RightToRepair"
}


// DealerDbModelsVoucher
/** 
 * A voucher for EDT activation
**/
export class DealerDbModelsVoucher extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDate, form, name=CreatedDate;" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode?: string;

  @Metadata({ data: "json, name=Deleted, form, name=Deleted;" })
  deleted?: boolean;

  @Metadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @Metadata({ data: "json, name=ExpirationDate, form, name=ExpirationDate;" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=LicenseTo, form, name=LicenseTo;" })
  licenseTo?: string;

  @Metadata({ data: "json, name=ModifiedBy, form, name=ModifiedBy;" })
  modifiedBy?: string;

  @Metadata({ data: "json, name=OrderNumber, form, name=OrderNumber;" })
  orderNumber?: string;

  @Metadata({ data: "json, name=Punched, form, name=Punched;" })
  punched?: boolean;

  @Metadata({ data: "json, name=PunchedDate, form, name=PunchedDate;" })
  punchedDate?: Date;

  @Metadata({ data: "json, name=Purpose, form, name=Purpose;" })
  purpose?: string;

  @Metadata({ data: "json, name=Type, form, name=Type;" })
  type?: DealerDbModelsVoucherTypeEnum;

  @Metadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" })
  voucherCode?: string;
}
