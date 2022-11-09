import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateRoleToGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class AssociateRoleToGroupHeaders extends SpeakeasyBase {
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
}


export class AssociateRoleToGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}


export class AssociateRoleToGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssociateRoleToGroupPathParams;

  @Metadata()
  headers: AssociateRoleToGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateRoleToGroupRequestBody;
}


export class AssociateRoleToGroupResponse extends SpeakeasyBase {
  @Metadata()
  associateRoleToGroupResponse?: shared.AssociateRoleToGroupResponse;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  statusCode: number;
}
