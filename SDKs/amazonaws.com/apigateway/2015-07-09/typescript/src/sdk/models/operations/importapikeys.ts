import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ImportApiKeysFormatEnum {
    Csv = "csv"
}

export enum ImportApiKeysModeEnum {
    Import = "import"
}


export class ImportApiKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=failonwarnings" })
  failonwarnings?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: ImportApiKeysFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode: ImportApiKeysModeEnum;
}


export class ImportApiKeysHeaders extends SpeakeasyBase {
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


export class ImportApiKeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class ImportApiKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ImportApiKeysQueryParams;

  @Metadata()
  headers: ImportApiKeysHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ImportApiKeysRequestBody;
}


export class ImportApiKeysResponse extends SpeakeasyBase {
  @Metadata()
  apiKeyIds?: shared.ApiKeyIds;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
