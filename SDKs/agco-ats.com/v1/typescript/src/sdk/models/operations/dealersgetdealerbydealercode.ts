import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DealersGetDealerbyDealerCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DealerCode" })
  dealerCode: string;
}


export class DealersGetDealerbyDealerCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DealersGetDealerbyDealerCodePathParams;
}


export class DealersGetDealerbyDealerCodeResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  dealerDbModelsDealer?: shared.DealerDbModelsDealer;

  @Metadata()
  statusCode: number;
}
