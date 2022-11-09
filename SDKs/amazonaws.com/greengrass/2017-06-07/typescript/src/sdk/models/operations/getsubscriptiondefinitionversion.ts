import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionDefinitionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionId" })
  subscriptionDefinitionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionVersionId" })
  subscriptionDefinitionVersionId: string;
}


export class GetSubscriptionDefinitionVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetSubscriptionDefinitionVersionHeaders extends SpeakeasyBase {
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


export class GetSubscriptionDefinitionVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubscriptionDefinitionVersionPathParams;

  @Metadata()
  queryParams: GetSubscriptionDefinitionVersionQueryParams;

  @Metadata()
  headers: GetSubscriptionDefinitionVersionHeaders;
}


export class GetSubscriptionDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getSubscriptionDefinitionVersionResponse?: shared.GetSubscriptionDefinitionVersionResponse;

  @Metadata()
  statusCode: number;
}
