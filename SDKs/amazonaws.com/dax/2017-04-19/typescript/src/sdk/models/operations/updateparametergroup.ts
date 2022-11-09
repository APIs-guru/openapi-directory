import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateParameterGroupXAmzTargetEnum {
    AmazonDaxv3UpdateParameterGroup = "AmazonDAXV3.UpdateParameterGroup"
}


export class UpdateParameterGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateParameterGroupXAmzTargetEnum;
}


export class UpdateParameterGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateParameterGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateParameterGroupRequest;
}


export class UpdateParameterGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterGroupStateFault?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  parameterGroupNotFoundFault?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateParameterGroupResponse?: shared.UpdateParameterGroupResponse;
}
