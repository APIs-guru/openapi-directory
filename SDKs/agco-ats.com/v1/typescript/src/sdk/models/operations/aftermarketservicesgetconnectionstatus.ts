import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AftermarketServicesGetConnectionStatusResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  aftermarketServicesGetConnectionStatus200ApplicationJsonBoolean?: boolean;

  @Metadata()
  aftermarketServicesGetConnectionStatus200TextJsonBoolean?: boolean;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
