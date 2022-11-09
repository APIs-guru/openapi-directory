import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateTeamMemberXAmzTargetEnum {
    CodeStar20170419UpdateTeamMember = "CodeStar_20170419.UpdateTeamMember"
}


export class UpdateTeamMemberHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateTeamMemberXAmzTargetEnum;
}


export class UpdateTeamMemberRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTeamMemberHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTeamMemberRequest;
}


export class UpdateTeamMemberResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidServiceRoleException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  projectConfigurationException?: any;

  @Metadata()
  projectNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamMemberNotFoundException?: any;

  @Metadata()
  updateTeamMemberResult?: shared.UpdateTeamMemberResult;

  @Metadata()
  validationException?: any;
}
