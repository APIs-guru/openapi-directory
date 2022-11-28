import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateServicePrimaryTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateServicePrimaryTaskSet = "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet"
}


export class UpdateServicePrimaryTaskSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateServicePrimaryTaskSetXAmzTargetEnum;
}


export class UpdateServicePrimaryTaskSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateServicePrimaryTaskSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateServicePrimaryTaskSetRequest;
}


export class UpdateServicePrimaryTaskSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  clusterNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  serviceNotActiveException?: any;

  @SpeakeasyMetadata()
  serviceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskSetNotFoundException?: any;

  @SpeakeasyMetadata()
  unsupportedFeatureException?: any;

  @SpeakeasyMetadata()
  updateServicePrimaryTaskSetResponse?: shared.UpdateServicePrimaryTaskSetResponse;
}
