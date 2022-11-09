import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateUserProfileXAmzTargetEnum {
    CodeStar20170419UpdateUserProfile = "CodeStar_20170419.UpdateUserProfile"
}


export class UpdateUserProfileHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateUserProfileXAmzTargetEnum;
}


export class UpdateUserProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateUserProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateUserProfileRequest;
}


export class UpdateUserProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateUserProfileResult?: shared.UpdateUserProfileResult;

  @Metadata()
  userProfileNotFoundException?: any;

  @Metadata()
  validationException?: any;
}
