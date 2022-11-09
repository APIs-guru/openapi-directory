import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413CreateApprovalRuleTemplate = "CodeCommit_20150413.CreateApprovalRuleTemplate"
}


export class CreateApprovalRuleTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateApprovalRuleTemplateXAmzTargetEnum;
}


export class CreateApprovalRuleTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateApprovalRuleTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateApprovalRuleTemplateInput;
}


export class CreateApprovalRuleTemplateResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateContentRequiredException?: any;

  @Metadata()
  approvalRuleTemplateNameAlreadyExistsException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createApprovalRuleTemplateOutput?: shared.CreateApprovalRuleTemplateOutput;

  @Metadata()
  invalidApprovalRuleTemplateContentException?: any;

  @Metadata()
  invalidApprovalRuleTemplateDescriptionException?: any;

  @Metadata()
  invalidApprovalRuleTemplateNameException?: any;

  @Metadata()
  numberOfRuleTemplatesExceededException?: any;

  @Metadata()
  statusCode: number;
}
