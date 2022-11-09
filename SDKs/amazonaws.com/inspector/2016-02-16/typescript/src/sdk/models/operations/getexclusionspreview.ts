import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExclusionsPreviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetExclusionsPreviewXAmzTargetEnum {
    InspectorServiceGetExclusionsPreview = "InspectorService.GetExclusionsPreview"
}


export class GetExclusionsPreviewHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetExclusionsPreviewXAmzTargetEnum;
}


export class GetExclusionsPreviewRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExclusionsPreviewQueryParams;

  @Metadata()
  headers: GetExclusionsPreviewHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetExclusionsPreviewRequest;
}


export class GetExclusionsPreviewResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getExclusionsPreviewResponse?: shared.GetExclusionsPreviewResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  noSuchEntityException?: any;

  @Metadata()
  statusCode: number;
}
