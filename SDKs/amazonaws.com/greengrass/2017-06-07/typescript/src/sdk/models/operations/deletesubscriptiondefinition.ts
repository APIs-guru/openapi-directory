import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSubscriptionDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionId" })
  subscriptionDefinitionId: string;
}


export class DeleteSubscriptionDefinitionHeaders extends SpeakeasyBase {
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
}


export class DeleteSubscriptionDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSubscriptionDefinitionPathParams;

  @SpeakeasyMetadata()
  headers: DeleteSubscriptionDefinitionHeaders;
}


export class DeleteSubscriptionDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteSubscriptionDefinitionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
