import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VouchersDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" })
  voucherCode: string;
}


export class VouchersDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VouchersDeletePathParams;
}


export class VouchersDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
