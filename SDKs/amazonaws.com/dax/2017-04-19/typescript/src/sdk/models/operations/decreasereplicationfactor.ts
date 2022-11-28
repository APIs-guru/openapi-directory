import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DecreaseReplicationFactorXAmzTargetEnum {
    AmazonDaxv3DecreaseReplicationFactor = "AmazonDAXV3.DecreaseReplicationFactor"
}


export class DecreaseReplicationFactorHeaders extends SpeakeasyBase {
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
  xAmzTarget: DecreaseReplicationFactorXAmzTargetEnum;
}


export class DecreaseReplicationFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DecreaseReplicationFactorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DecreaseReplicationFactorRequest;
}


export class DecreaseReplicationFactorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterNotFoundFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  decreaseReplicationFactorResponse?: shared.DecreaseReplicationFactorResponse;

  @SpeakeasyMetadata()
  invalidClusterStateFault?: any;

  @SpeakeasyMetadata()
  invalidParameterCombinationException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  nodeNotFoundFault?: any;

  @SpeakeasyMetadata()
  serviceLinkedRoleNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
