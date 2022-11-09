import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserDefinedFunctionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetUserDefinedFunctionsXAmzTargetEnum {
    AwsGlueGetUserDefinedFunctions = "AWSGlue.GetUserDefinedFunctions"
}


export class GetUserDefinedFunctionsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetUserDefinedFunctionsXAmzTargetEnum;
}


export class GetUserDefinedFunctionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserDefinedFunctionsQueryParams;

  @Metadata()
  headers: GetUserDefinedFunctionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetUserDefinedFunctionsRequest;
}


export class GetUserDefinedFunctionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  getUserDefinedFunctionsResponse?: shared.GetUserDefinedFunctionsResponse;

  @Metadata()
  glueEncryptionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
