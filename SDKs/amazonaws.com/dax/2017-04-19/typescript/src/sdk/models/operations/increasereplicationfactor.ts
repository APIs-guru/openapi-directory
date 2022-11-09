import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum IncreaseReplicationFactorXAmzTargetEnum {
    AmazonDaxv3IncreaseReplicationFactor = "AmazonDAXV3.IncreaseReplicationFactor"
}


export class IncreaseReplicationFactorHeaders extends SpeakeasyBase {
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
  xAmzTarget: IncreaseReplicationFactorXAmzTargetEnum;
}


export class IncreaseReplicationFactorRequest extends SpeakeasyBase {
  @Metadata()
  headers: IncreaseReplicationFactorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IncreaseReplicationFactorRequest;
}


export class IncreaseReplicationFactorResponse extends SpeakeasyBase {
  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  increaseReplicationFactorResponse?: shared.IncreaseReplicationFactorResponse;

  @Metadata()
  insufficientClusterCapacityFault?: any;

  @Metadata()
  invalidClusterStateFault?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  invalidVpcNetworkStateFault?: any;

  @Metadata()
  nodeQuotaForClusterExceededFault?: any;

  @Metadata()
  nodeQuotaForCustomerExceededFault?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
