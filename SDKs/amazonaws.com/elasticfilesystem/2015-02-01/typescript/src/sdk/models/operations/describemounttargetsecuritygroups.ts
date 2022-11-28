import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeMountTargetSecurityGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MountTargetId" })
  mountTargetId: string;
}


export class DescribeMountTargetSecurityGroupsHeaders extends SpeakeasyBase {
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


export class DescribeMountTargetSecurityGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DescribeMountTargetSecurityGroupsPathParams;

  @SpeakeasyMetadata()
  headers: DescribeMountTargetSecurityGroupsHeaders;
}


export class DescribeMountTargetSecurityGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeMountTargetSecurityGroupsResponse?: shared.DescribeMountTargetSecurityGroupsResponse;

  @SpeakeasyMetadata()
  incorrectMountTargetState?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  mountTargetNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
