import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopDataCollectionByAgentIdsXAmzTargetEnum {
    AwsPoseidonServiceV20151101StopDataCollectionByAgentIds = "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds"
}


export class StopDataCollectionByAgentIdsHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopDataCollectionByAgentIdsXAmzTargetEnum;
}


export class StopDataCollectionByAgentIdsRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopDataCollectionByAgentIdsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopDataCollectionByAgentIdsRequest;
}


export class StopDataCollectionByAgentIdsResponse extends SpeakeasyBase {
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
  serverInternalErrorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopDataCollectionByAgentIdsResponse?: shared.StopDataCollectionByAgentIdsResponse;
}
