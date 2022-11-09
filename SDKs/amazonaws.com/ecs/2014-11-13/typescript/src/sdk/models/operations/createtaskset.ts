import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113CreateTaskSet = "AmazonEC2ContainerServiceV20141113.CreateTaskSet"
}


export class CreateTaskSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTaskSetXAmzTargetEnum;
}


export class CreateTaskSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTaskSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTaskSetRequest;
}


export class CreateTaskSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createTaskSetResponse?: shared.CreateTaskSetResponse;

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
  unsupportedFeatureException?: any;
}
