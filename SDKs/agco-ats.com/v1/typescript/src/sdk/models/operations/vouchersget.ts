import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum VouchersGetDeletedEnum {
    NotDeleted = "NotDeleted"
,    Deleted = "Deleted"
,    All = "All"
}

export enum VouchersGetTypeEnum {
    Commercial = "Commercial"
,    Internal = "Internal"
,    Temporary = "Temporary"
,    RightToRepair = "RightToRepair"
}


export class VouchersGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DealerCode" })
  dealerCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Deleted" })
  deleted?: VouchersGetDeletedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExpirationAfter" })
  expirationAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExpirationBefore" })
  expirationBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LicenseTo" })
  licenseTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ModifiedBy" })
  modifiedBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OrderNumber" })
  orderNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Punched" })
  punched?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PunchedAfter" })
  punchedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PunchedBefore" })
  punchedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Purpose" })
  purpose?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: VouchersGetTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class VouchersGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VouchersGetQueryParams;
}


export class VouchersGetResponse extends SpeakeasyBase {
  @Metadata()
  apiPagedResponseDealerDbModelsVoucher?: shared.ApiPagedResponseDealerDbModelsVoucher;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
