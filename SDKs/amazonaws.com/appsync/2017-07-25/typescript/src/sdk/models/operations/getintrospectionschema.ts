import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntrospectionSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}

export enum GetIntrospectionSchemaFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}


export class GetIntrospectionSchemaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: GetIntrospectionSchemaFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDirectives" })
  includeDirectives?: boolean;
}


export class GetIntrospectionSchemaHeaders extends SpeakeasyBase {
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


export class GetIntrospectionSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntrospectionSchemaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetIntrospectionSchemaQueryParams;

  @SpeakeasyMetadata()
  headers: GetIntrospectionSchemaHeaders;
}


export class GetIntrospectionSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getIntrospectionSchemaResponse?: shared.GetIntrospectionSchemaResponse;

  @SpeakeasyMetadata()
  graphQlSchemaException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
