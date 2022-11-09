import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDetailsOfFileByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileUuid" })
  fileUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class GetDetailsOfFileByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=inline_files" })
  inlineFiles?: boolean;
}


export class GetDetailsOfFileByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetDetailsOfFileByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDetailsOfFileByIdPathParams;

  @Metadata()
  queryParams: GetDetailsOfFileByIdQueryParams;

  @Metadata()
  security: GetDetailsOfFileByIdSecurity;
}


export class GetDetailsOfFileByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  file?: shared.File;

  @Metadata()
  statusCode: number;
}
