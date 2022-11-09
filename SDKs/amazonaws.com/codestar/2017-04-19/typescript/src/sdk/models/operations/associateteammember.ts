import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateTeamMemberXAmzTargetEnum {
    CodeStar20170419AssociateTeamMember = "CodeStar_20170419.AssociateTeamMember"
}


export class AssociateTeamMemberHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateTeamMemberXAmzTargetEnum;
}


export class AssociateTeamMemberRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateTeamMemberHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateTeamMemberRequest;
}


export class AssociateTeamMemberResponse extends SpeakeasyBase {
  @Metadata()
  associateTeamMemberResult?: shared.AssociateTeamMemberResult;

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
  teamMemberAlreadyAssociatedException?: any;

  @Metadata()
  validationException?: any;
}
