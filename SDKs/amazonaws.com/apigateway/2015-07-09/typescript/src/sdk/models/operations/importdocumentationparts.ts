import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportDocumentationPartsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}

export enum ImportDocumentationPartsModeEnum {
    Merge = "merge"
,    Overwrite = "overwrite"
}


export class ImportDocumentationPartsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=failonwarnings" })
  failonwarnings?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: ImportDocumentationPartsModeEnum;
}


export class ImportDocumentationPartsHeaders extends SpeakeasyBase {
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


export class ImportDocumentationPartsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class ImportDocumentationPartsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImportDocumentationPartsPathParams;

  @Metadata()
  queryParams: ImportDocumentationPartsQueryParams;

  @Metadata()
  headers: ImportDocumentationPartsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ImportDocumentationPartsRequestBody;
}


export class ImportDocumentationPartsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  documentationPartIds?: shared.DocumentationPartIds;

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
