import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMountTargetSecurityGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MountTargetId" })
  mountTargetId: string;
}


export class DescribeMountTargetSecurityGroupsHeaders extends SpeakeasyBase {
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


export class DescribeMountTargetSecurityGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeMountTargetSecurityGroupsPathParams;

  @Metadata()
  headers: DescribeMountTargetSecurityGroupsHeaders;
}


export class DescribeMountTargetSecurityGroupsResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeMountTargetSecurityGroupsResponse?: shared.DescribeMountTargetSecurityGroupsResponse;

  @Metadata()
  incorrectMountTargetState?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  mountTargetNotFound?: any;

  @Metadata()
  statusCode: number;
}
