import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UploadDocumentsFormatEnum {
    Sdk = "sdk"
}


export class UploadDocumentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: UploadDocumentsFormatEnum;
}

export enum UploadDocumentsContentTypeEnum {
    ApplicationJson = "application/json",
    ApplicationXml = "application/xml"
}


export class UploadDocumentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: UploadDocumentsContentTypeEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class UploadDocumentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents: string;
}


export class UploadDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UploadDocumentsQueryParams;

  @SpeakeasyMetadata()
  headers: UploadDocumentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UploadDocumentsRequestBody;
}


export class UploadDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentServiceException?: shared.DocumentServiceException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadDocumentsResponse?: shared.UploadDocumentsResponse;
}
