import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListUserProfilesXAmzTargetEnum {
    CodeStar20170419ListUserProfiles = "CodeStar_20170419.ListUserProfiles"
}


export class ListUserProfilesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListUserProfilesXAmzTargetEnum;
}


export class ListUserProfilesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListUserProfilesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListUserProfilesRequest;
}


export class ListUserProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listUserProfilesResult?: shared.ListUserProfilesResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
