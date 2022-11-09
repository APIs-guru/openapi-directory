import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterTaskDefinitionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeregisterTaskDefinition = "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition"
}


export class DeregisterTaskDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterTaskDefinitionXAmzTargetEnum;
}


export class DeregisterTaskDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterTaskDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterTaskDefinitionRequest;
}


export class DeregisterTaskDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deregisterTaskDefinitionResponse?: shared.DeregisterTaskDefinitionResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
