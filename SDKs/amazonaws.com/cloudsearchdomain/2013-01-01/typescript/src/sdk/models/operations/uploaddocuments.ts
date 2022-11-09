import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UploadDocumentsFormatEnum {
    Sdk = "sdk"
}


export class UploadDocumentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: UploadDocumentsFormatEnum;
}

export enum UploadDocumentsContentTypeEnum {
    ApplicationJson = "application/json"
,    ApplicationXml = "application/xml"
}


export class UploadDocumentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: UploadDocumentsContentTypeEnum;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class UploadDocumentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents" })
  documents: string;
}


export class UploadDocumentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UploadDocumentsQueryParams;

  @Metadata()
  headers: UploadDocumentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UploadDocumentsRequestBody;
}


export class UploadDocumentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  documentServiceException?: shared.DocumentServiceException;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadDocumentsResponse?: shared.UploadDocumentsResponse;
}
