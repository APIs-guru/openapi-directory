import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPartitionIndexesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetPartitionIndexesXAmzTargetEnum {
    AwsGlueGetPartitionIndexes = "AWSGlue.GetPartitionIndexes"
}


export class GetPartitionIndexesHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPartitionIndexesXAmzTargetEnum;
}


export class GetPartitionIndexesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPartitionIndexesQueryParams;

  @Metadata()
  headers: GetPartitionIndexesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetPartitionIndexesRequest;
}


export class GetPartitionIndexesResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  getPartitionIndexesResponse?: shared.GetPartitionIndexesResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
