import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchCheckLayerAvailabilityXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchCheckLayerAvailability = "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability"
}


export class BatchCheckLayerAvailabilityHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchCheckLayerAvailabilityXAmzTargetEnum;
}


export class BatchCheckLayerAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchCheckLayerAvailabilityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchCheckLayerAvailabilityRequest;
}


export class BatchCheckLayerAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  batchCheckLayerAvailabilityResponse?: shared.BatchCheckLayerAvailabilityResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
