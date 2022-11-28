import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DealerDbModelsVoucherHistoryTypeEnum {
    Commercial = "Commercial",
    Internal = "Internal",
    Temporary = "Temporary",
    RightToRepair = "RightToRepair"
}


export class DealerDbModelsVoucherHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangedDate" })
  changedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DealerCode" })
  dealerCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=LicenseTo" })
  licenseTo?: string;

  @SpeakeasyMetadata({ data: "json, name=ModifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Punched" })
  punched?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PunchedDate" })
  punchedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DealerDbModelsVoucherHistoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VoucherCode" })
  voucherCode?: string;
}
