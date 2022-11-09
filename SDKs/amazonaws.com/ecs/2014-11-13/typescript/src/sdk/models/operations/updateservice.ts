import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateServiceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateService = "AmazonEC2ContainerServiceV20141113.UpdateService"
}


export class UpdateServiceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateServiceXAmzTargetEnum;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateServiceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateServiceRequest;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  platformTaskDefinitionIncompatibilityException?: any;

  @Metadata()
  platformUnknownException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  serviceNotActiveException?: any;

  @Metadata()
  serviceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateServiceResponse?: shared.UpdateServiceResponse;
}
