import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum VouchersGetDeletedEnum {
    NotDeleted = "NotDeleted",
    Deleted = "Deleted",
    All = "All"
}

export enum VouchersGetTypeEnum {
    Commercial = "Commercial",
    Internal = "Internal",
    Temporary = "Temporary",
    RightToRepair = "RightToRepair"
}


export class VouchersGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DealerCode" })
  dealerCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Deleted" })
  deleted?: VouchersGetDeletedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExpirationAfter" })
  expirationAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExpirationBefore" })
  expirationBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LicenseTo" })
  licenseTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ModifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OrderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Punched" })
  punched?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PunchedAfter" })
  punchedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PunchedBefore" })
  punchedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: VouchersGetTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class VouchersGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VouchersGetQueryParams;
}


export class VouchersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPagedResponseDealerDbModelsVoucher?: shared.ApiPagedResponseDealerDbModelsVoucher;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
