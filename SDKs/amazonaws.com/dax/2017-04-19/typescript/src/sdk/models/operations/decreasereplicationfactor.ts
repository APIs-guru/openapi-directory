import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DecreaseReplicationFactorXAmzTargetEnum {
    AmazonDaxv3DecreaseReplicationFactor = "AmazonDAXV3.DecreaseReplicationFactor"
}


export class DecreaseReplicationFactorHeaders extends SpeakeasyBase {
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
  xAmzTarget: DecreaseReplicationFactorXAmzTargetEnum;
}


export class DecreaseReplicationFactorRequest extends SpeakeasyBase {
  @Metadata()
  headers: DecreaseReplicationFactorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DecreaseReplicationFactorRequest;
}


export class DecreaseReplicationFactorResponse extends SpeakeasyBase {
  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  decreaseReplicationFactorResponse?: shared.DecreaseReplicationFactorResponse;

  @Metadata()
  invalidClusterStateFault?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  nodeNotFoundFault?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
