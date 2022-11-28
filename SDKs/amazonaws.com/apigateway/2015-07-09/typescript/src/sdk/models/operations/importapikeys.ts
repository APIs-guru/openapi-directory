import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ImportApiKeysFormatEnum {
    Csv = "csv"
}

export enum ImportApiKeysModeEnum {
    Import = "import"
}


export class ImportApiKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failonwarnings" })
  failonwarnings?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: ImportApiKeysFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode: ImportApiKeysModeEnum;
}


export class ImportApiKeysHeaders extends SpeakeasyBase {
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


export class ImportApiKeysRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


export class ImportApiKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ImportApiKeysQueryParams;

  @SpeakeasyMetadata()
  headers: ImportApiKeysHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ImportApiKeysRequestBody;
}


export class ImportApiKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyIds?: shared.ApiKeyIds;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
