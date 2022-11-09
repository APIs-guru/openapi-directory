import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=specification" })
  specification: string;
}


export class ExportApiQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=exportVersion" })
  exportVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeExtensions" })
  includeExtensions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputType" })
  outputType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stageName" })
  stageName?: string;
}


export class ExportApiHeaders extends SpeakeasyBase {
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


export class ExportApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExportApiPathParams;

  @Metadata()
  queryParams: ExportApiQueryParams;

  @Metadata()
  headers: ExportApiHeaders;
}


export class ExportApiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  exportApiResponse?: shared.ExportApiResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
