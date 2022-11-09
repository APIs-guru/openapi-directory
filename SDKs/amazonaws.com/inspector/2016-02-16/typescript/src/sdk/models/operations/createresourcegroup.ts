import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateResourceGroupXAmzTargetEnum {
    InspectorServiceCreateResourceGroup = "InspectorService.CreateResourceGroup"
}


export class CreateResourceGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateResourceGroupXAmzTargetEnum;
}


export class CreateResourceGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateResourceGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateResourceGroupRequest;
}


export class CreateResourceGroupResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createResourceGroupResponse?: shared.CreateResourceGroupResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  serviceTemporarilyUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
