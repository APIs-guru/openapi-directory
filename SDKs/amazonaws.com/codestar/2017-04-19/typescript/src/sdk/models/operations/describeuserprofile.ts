import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeUserProfileXAmzTargetEnum {
    CodeStar20170419DescribeUserProfile = "CodeStar_20170419.DescribeUserProfile"
}


export class DescribeUserProfileHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeUserProfileXAmzTargetEnum;
}


export class DescribeUserProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeUserProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeUserProfileRequest;
}


export class DescribeUserProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeUserProfileResult?: shared.DescribeUserProfileResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  userProfileNotFoundException?: any;

  @Metadata()
  validationException?: any;
}
