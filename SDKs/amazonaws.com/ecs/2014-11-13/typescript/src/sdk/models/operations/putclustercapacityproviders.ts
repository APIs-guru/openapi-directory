import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutClusterCapacityProvidersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutClusterCapacityProviders = "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders"
}


export class PutClusterCapacityProvidersHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutClusterCapacityProvidersXAmzTargetEnum;
}


export class PutClusterCapacityProvidersRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutClusterCapacityProvidersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutClusterCapacityProvidersRequest;
}


export class PutClusterCapacityProvidersResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  putClusterCapacityProvidersResponse?: shared.PutClusterCapacityProvidersResponse;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateInProgressException?: any;
}
