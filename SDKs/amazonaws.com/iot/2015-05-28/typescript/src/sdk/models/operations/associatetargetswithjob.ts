import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateTargetsWithJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class AssociateTargetsWithJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=namespaceId" })
  namespaceId?: string;
}


export class AssociateTargetsWithJobHeaders extends SpeakeasyBase {
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
}


export class AssociateTargetsWithJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=targets" })
  targets: string[];
}


export class AssociateTargetsWithJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssociateTargetsWithJobPathParams;

  @Metadata()
  queryParams: AssociateTargetsWithJobQueryParams;

  @Metadata()
  headers: AssociateTargetsWithJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateTargetsWithJobRequestBody;
}


export class AssociateTargetsWithJobResponse extends SpeakeasyBase {
  @Metadata()
  associateTargetsWithJobResponse?: shared.AssociateTargetsWithJobResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
