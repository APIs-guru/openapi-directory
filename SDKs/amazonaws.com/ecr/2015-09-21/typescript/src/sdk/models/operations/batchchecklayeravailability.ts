import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchCheckLayerAvailabilityXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchCheckLayerAvailability = "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability"
}


export class BatchCheckLayerAvailabilityHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: BatchCheckLayerAvailabilityXAmzTargetEnum;
}


export class BatchCheckLayerAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchCheckLayerAvailabilityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchCheckLayerAvailabilityRequest;
}


export class BatchCheckLayerAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchCheckLayerAvailabilityResponse?: shared.BatchCheckLayerAvailabilityResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  repositoryNotFoundException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
