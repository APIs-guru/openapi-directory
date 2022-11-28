import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFunctionDefinitionVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" })
  functionDefinitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionVersionId" })
  functionDefinitionVersionId: string;
}


export class GetFunctionDefinitionVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetFunctionDefinitionVersionHeaders extends SpeakeasyBase {
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


export class GetFunctionDefinitionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFunctionDefinitionVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFunctionDefinitionVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetFunctionDefinitionVersionHeaders;
}


export class GetFunctionDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFunctionDefinitionVersionResponse?: shared.GetFunctionDefinitionVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
