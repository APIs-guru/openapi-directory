import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListServerNeighborsXAmzTargetEnum {
    AwsPoseidonServiceV20151101ListServerNeighbors = "AWSPoseidonService_V2015_11_01.ListServerNeighbors"
}


export class ListServerNeighborsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListServerNeighborsXAmzTargetEnum;
}


export class ListServerNeighborsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListServerNeighborsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListServerNeighborsRequest;
}


export class ListServerNeighborsResponse extends SpeakeasyBase {
  @Metadata()
  authorizationErrorException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  homeRegionNotSetException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  listServerNeighborsResponse?: shared.ListServerNeighborsResponse;

  @Metadata()
  serverInternalErrorException?: any;

  @Metadata()
  statusCode: number;
}
