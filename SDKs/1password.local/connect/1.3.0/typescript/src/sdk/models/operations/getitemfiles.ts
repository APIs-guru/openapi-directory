import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class GetItemFilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline_files" })
  inlineFiles?: boolean;
}


export class GetItemFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetItemFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemFilesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetItemFilesQueryParams;

  @SpeakeasyMetadata()
  security: GetItemFilesSecurity;
}


export class GetItemFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.File })
  files?: shared.File[];

  @SpeakeasyMetadata()
  statusCode: number;
}
