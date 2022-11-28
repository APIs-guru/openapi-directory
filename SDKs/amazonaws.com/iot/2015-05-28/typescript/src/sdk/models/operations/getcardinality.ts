import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCardinalityHeaders extends SpeakeasyBase {
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


export class GetCardinalityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationField" })
  aggregationField?: string;

  @SpeakeasyMetadata({ data: "json, name=indexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString: string;

  @SpeakeasyMetadata({ data: "json, name=queryVersion" })
  queryVersion?: string;
}


export class GetCardinalityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetCardinalityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetCardinalityRequestBody;
}


export class GetCardinalityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCardinalityResponse?: shared.GetCardinalityResponse;

  @SpeakeasyMetadata()
  indexNotReadyException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidAggregationException?: any;

  @SpeakeasyMetadata()
  invalidQueryException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
