import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DealerDbModelsVoucherHistoryTypeEnum {
    Commercial = "Commercial"
,    Internal = "Internal"
,    Temporary = "Temporary"
,    RightToRepair = "RightToRepair"
}


export class DealerDbModelsVoucherHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangedDate" })
  changedDate?: Date;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DealerCode" })
  dealerCode?: string;

  @Metadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=ID" })
  id?: number;

  @Metadata({ data: "json, name=LicenseTo" })
  licenseTo?: string;

  @Metadata({ data: "json, name=ModifiedBy" })
  modifiedBy?: string;

  @Metadata({ data: "json, name=OrderNumber" })
  orderNumber?: string;

  @Metadata({ data: "json, name=Punched" })
  punched?: boolean;

  @Metadata({ data: "json, name=PunchedDate" })
  punchedDate?: Date;

  @Metadata({ data: "json, name=Purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=Type" })
  type?: DealerDbModelsVoucherHistoryTypeEnum;

  @Metadata({ data: "json, name=VoucherCode" })
  voucherCode?: string;
}
