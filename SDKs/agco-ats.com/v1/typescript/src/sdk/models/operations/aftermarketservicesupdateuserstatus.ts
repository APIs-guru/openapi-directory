import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AftermarketServicesUpdateUserStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  agcoPowerServicesModelsUserStatus?: shared.AgcoPowerServicesModelsUserStatus;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  agcoPowerServicesModelsUserStatus1?: shared.AgcoPowerServicesModelsUserStatus;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  agcoPowerServicesModelsUserStatus2?: shared.AgcoPowerServicesModelsUserStatus;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AftermarketServicesUpdateUserStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AftermarketServicesUpdateUserStatusRequests;
}


export class AftermarketServicesUpdateUserStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  aftermarketServicesUpdateUserStatus200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  aftermarketServicesUpdateUserStatus200TextJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
