import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AftermarketServicesUpdateUserStatusRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  agcoPowerServicesModelsUserStatus?: shared.AgcoPowerServicesModelsUserStatus;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  agcoPowerServicesModelsUserStatus1?: shared.AgcoPowerServicesModelsUserStatus;

  @Metadata({ data: "request, media_type=text/json" })
  agcoPowerServicesModelsUserStatus2?: shared.AgcoPowerServicesModelsUserStatus;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AftermarketServicesUpdateUserStatusRequest extends SpeakeasyBase {
  @Metadata()
  request: AftermarketServicesUpdateUserStatusRequests;
}


export class AftermarketServicesUpdateUserStatusResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  aftermarketServicesUpdateUserStatus200ApplicationJsonBoolean?: boolean;

  @Metadata()
  aftermarketServicesUpdateUserStatus200TextJsonBoolean?: boolean;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
