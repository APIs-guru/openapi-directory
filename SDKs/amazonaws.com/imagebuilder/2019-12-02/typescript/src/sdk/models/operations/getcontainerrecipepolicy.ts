import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetContainerRecipePolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containerRecipeArn" })
  containerRecipeArn: string;
}


export class GetContainerRecipePolicyHeaders extends SpeakeasyBase {
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


export class GetContainerRecipePolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetContainerRecipePolicyQueryParams;

  @Metadata()
  headers: GetContainerRecipePolicyHeaders;
}


export class GetContainerRecipePolicyResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  getContainerRecipePolicyResponse?: shared.GetContainerRecipePolicyResponse;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
