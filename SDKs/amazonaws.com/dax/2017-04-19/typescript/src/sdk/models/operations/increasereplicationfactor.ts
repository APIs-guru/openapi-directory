import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum IncreaseReplicationFactorXAmzTargetEnum {
    AmazonDaxv3IncreaseReplicationFactor = "AmazonDAXV3.IncreaseReplicationFactor"
}


export class IncreaseReplicationFactorHeaders extends SpeakeasyBase {
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
  xAmzTarget: IncreaseReplicationFactorXAmzTargetEnum;
}


export class IncreaseReplicationFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: IncreaseReplicationFactorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IncreaseReplicationFactorRequest;
}


export class IncreaseReplicationFactorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterNotFoundFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  increaseReplicationFactorResponse?: shared.IncreaseReplicationFactorResponse;

  @SpeakeasyMetadata()
  insufficientClusterCapacityFault?: any;

  @SpeakeasyMetadata()
  invalidClusterStateFault?: any;

  @SpeakeasyMetadata()
  invalidParameterCombinationException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  invalidVpcNetworkStateFault?: any;

  @SpeakeasyMetadata()
  nodeQuotaForClusterExceededFault?: any;

  @SpeakeasyMetadata()
  nodeQuotaForCustomerExceededFault?: any;

  @SpeakeasyMetadata()
  serviceLinkedRoleNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
