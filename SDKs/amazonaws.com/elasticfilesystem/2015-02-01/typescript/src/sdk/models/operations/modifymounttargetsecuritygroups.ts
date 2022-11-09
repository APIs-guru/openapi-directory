import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyMountTargetSecurityGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MountTargetId" })
  mountTargetId: string;
}


export class ModifyMountTargetSecurityGroupsHeaders extends SpeakeasyBase {
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


export class ModifyMountTargetSecurityGroupsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];
}


export class ModifyMountTargetSecurityGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ModifyMountTargetSecurityGroupsPathParams;

  @Metadata()
  headers: ModifyMountTargetSecurityGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ModifyMountTargetSecurityGroupsRequestBody;
}


export class ModifyMountTargetSecurityGroupsResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incorrectMountTargetState?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  mountTargetNotFound?: any;

  @Metadata()
  securityGroupLimitExceeded?: any;

  @Metadata()
  securityGroupNotFound?: any;

  @Metadata()
  statusCode: number;
}
