import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIntrospectionSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}

export enum GetIntrospectionSchemaFormatEnum {
    Sdl = "SDL"
,    Json = "JSON"
}


export class GetIntrospectionSchemaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: GetIntrospectionSchemaFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDirectives" })
  includeDirectives?: boolean;
}


export class GetIntrospectionSchemaHeaders extends SpeakeasyBase {
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


export class GetIntrospectionSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIntrospectionSchemaPathParams;

  @Metadata()
  queryParams: GetIntrospectionSchemaQueryParams;

  @Metadata()
  headers: GetIntrospectionSchemaHeaders;
}


export class GetIntrospectionSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getIntrospectionSchemaResponse?: shared.GetIntrospectionSchemaResponse;

  @Metadata()
  graphQlSchemaException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
