import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class UpdateGroupHeaders extends SpeakeasyBase {
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


export class UpdateGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}


export class UpdateGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupPathParams;

  @Metadata()
  headers: UpdateGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGroupRequestBody;
}


export class UpdateGroupResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGroupResponse?: Map<string, any>;
}
