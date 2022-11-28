import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AftermarketServicesGetConnectionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  aftermarketServicesGetConnectionStatus200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  aftermarketServicesGetConnectionStatus200TextJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
