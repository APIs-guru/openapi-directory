import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemFilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class GetItemFilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=inline_files" })
  inlineFiles?: boolean;
}


export class GetItemFilesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetItemFilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemFilesPathParams;

  @Metadata()
  queryParams: GetItemFilesQueryParams;

  @Metadata()
  security: GetItemFilesSecurity;
}


export class GetItemFilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata({ elemType: shared.File })
  files?: shared.File[];

  @Metadata()
  statusCode: number;
}
