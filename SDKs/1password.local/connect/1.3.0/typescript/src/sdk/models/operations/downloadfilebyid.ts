import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DownloadFileByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileUuid" })
  fileUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class DownloadFileByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class DownloadFileByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadFileByIdPathParams;

  @Metadata()
  security: DownloadFileByIdSecurity;
}


export class DownloadFileByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadFileById200ApplicationOctetStreamBinaryString?: Uint8Array;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
