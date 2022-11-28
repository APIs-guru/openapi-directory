import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDetailsOfFileByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileUuid" })
  fileUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class GetDetailsOfFileByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline_files" })
  inlineFiles?: boolean;
}


export class GetDetailsOfFileByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetDetailsOfFileByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDetailsOfFileByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDetailsOfFileByIdQueryParams;

  @SpeakeasyMetadata()
  security: GetDetailsOfFileByIdSecurity;
}


export class GetDetailsOfFileByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  file?: shared.File;

  @SpeakeasyMetadata()
  statusCode: number;
}
