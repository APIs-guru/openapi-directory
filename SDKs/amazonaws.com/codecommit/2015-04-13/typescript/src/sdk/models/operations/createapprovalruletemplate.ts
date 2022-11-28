import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413CreateApprovalRuleTemplate = "CodeCommit_20150413.CreateApprovalRuleTemplate"
}


export class CreateApprovalRuleTemplateHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateApprovalRuleTemplateXAmzTargetEnum;
}


export class CreateApprovalRuleTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateApprovalRuleTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateApprovalRuleTemplateInput;
}


export class CreateApprovalRuleTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalRuleTemplateContentRequiredException?: any;

  @SpeakeasyMetadata()
  approvalRuleTemplateNameAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  approvalRuleTemplateNameRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createApprovalRuleTemplateOutput?: shared.CreateApprovalRuleTemplateOutput;

  @SpeakeasyMetadata()
  invalidApprovalRuleTemplateContentException?: any;

  @SpeakeasyMetadata()
  invalidApprovalRuleTemplateDescriptionException?: any;

  @SpeakeasyMetadata()
  invalidApprovalRuleTemplateNameException?: any;

  @SpeakeasyMetadata()
  numberOfRuleTemplatesExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
