import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListApprovalRuleTemplatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListApprovalRuleTemplatesXAmzTargetEnum {
    CodeCommit20150413ListApprovalRuleTemplates = "CodeCommit_20150413.ListApprovalRuleTemplates"
}


export class ListApprovalRuleTemplatesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListApprovalRuleTemplatesXAmzTargetEnum;
}


export class ListApprovalRuleTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListApprovalRuleTemplatesQueryParams;

  @Metadata()
  headers: ListApprovalRuleTemplatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListApprovalRuleTemplatesInput;
}


export class ListApprovalRuleTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidMaxResultsException?: any;

  @Metadata()
  listApprovalRuleTemplatesOutput?: shared.ListApprovalRuleTemplatesOutput;

  @Metadata()
  statusCode: number;
}
