import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DealersGetDealerbyDealerCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DealerCode" })
  dealerCode: string;
}


export class DealersGetDealerbyDealerCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DealersGetDealerbyDealerCodePathParams;
}


export class DealersGetDealerbyDealerCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealerDbModelsDealer?: shared.DealerDbModelsDealer;

  @SpeakeasyMetadata()
  statusCode: number;
}
