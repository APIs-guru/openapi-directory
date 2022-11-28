import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadFileByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileUuid" })
  fileUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class DownloadFileByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class DownloadFileByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFileByIdPathParams;

  @SpeakeasyMetadata()
  security: DownloadFileByIdSecurity;
}


export class DownloadFileByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadFileById200ApplicationOctetStreamBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
