import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFunctionDefinitionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" })
  functionDefinitionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionVersionId" })
  functionDefinitionVersionId: string;
}


export class GetFunctionDefinitionVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetFunctionDefinitionVersionHeaders extends SpeakeasyBase {
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


export class GetFunctionDefinitionVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFunctionDefinitionVersionPathParams;

  @Metadata()
  queryParams: GetFunctionDefinitionVersionQueryParams;

  @Metadata()
  headers: GetFunctionDefinitionVersionHeaders;
}


export class GetFunctionDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getFunctionDefinitionVersionResponse?: shared.GetFunctionDefinitionVersionResponse;

  @Metadata()
  statusCode: number;
}
