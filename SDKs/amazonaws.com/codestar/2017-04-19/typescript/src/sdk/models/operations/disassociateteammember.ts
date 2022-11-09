import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateTeamMemberXAmzTargetEnum {
    CodeStar20170419DisassociateTeamMember = "CodeStar_20170419.DisassociateTeamMember"
}


export class DisassociateTeamMemberHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateTeamMemberXAmzTargetEnum;
}


export class DisassociateTeamMemberRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateTeamMemberHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateTeamMemberRequest;
}


export class DisassociateTeamMemberResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disassociateTeamMemberResult?: Map<string, any>;

  @Metadata()
  invalidServiceRoleException?: any;

  @Metadata()
  projectNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
