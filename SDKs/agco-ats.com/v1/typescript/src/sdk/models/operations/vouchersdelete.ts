import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VouchersDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" })
  voucherCode: string;
}


export class VouchersDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VouchersDeletePathParams;
}


export class VouchersDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
