import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyMountTargetSecurityGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MountTargetId" })
  mountTargetId: string;
}


export class ModifyMountTargetSecurityGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class ModifyMountTargetSecurityGroupsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];
}


export class ModifyMountTargetSecurityGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModifyMountTargetSecurityGroupsPathParams;

  @SpeakeasyMetadata()
  headers: ModifyMountTargetSecurityGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ModifyMountTargetSecurityGroupsRequestBody;
}


export class ModifyMountTargetSecurityGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incorrectMountTargetState?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  mountTargetNotFound?: any;

  @SpeakeasyMetadata()
  securityGroupLimitExceeded?: any;

  @SpeakeasyMetadata()
  securityGroupNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
