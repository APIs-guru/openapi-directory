import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413GetApprovalRuleTemplate = "CodeCommit_20150413.GetApprovalRuleTemplate"
}


export class GetApprovalRuleTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetApprovalRuleTemplateXAmzTargetEnum;
}


export class GetApprovalRuleTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApprovalRuleTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetApprovalRuleTemplateInput;
}


export class GetApprovalRuleTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @SpeakeasyMetadata()
  approvalRuleTemplateNameRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApprovalRuleTemplateOutput?: shared.GetApprovalRuleTemplateOutput;

  @SpeakeasyMetadata()
  invalidApprovalRuleTemplateNameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
