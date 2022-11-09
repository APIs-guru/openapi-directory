import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBucketsAggregationHeaders extends SpeakeasyBase {
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


// GetBucketsAggregationRequestBodyBucketsAggregationType
/** 
 * The type of bucketed aggregation performed.
**/
export class GetBucketsAggregationRequestBodyBucketsAggregationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=termsAggregation" })
  termsAggregation?: shared.TermsAggregation;
}


export class GetBucketsAggregationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationField" })
  aggregationField: string;

  @Metadata({ data: "json, name=bucketsAggregationType" })
  bucketsAggregationType: GetBucketsAggregationRequestBodyBucketsAggregationType;

  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=queryString" })
  queryString: string;

  @Metadata({ data: "json, name=queryVersion" })
  queryVersion?: string;
}


export class GetBucketsAggregationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetBucketsAggregationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetBucketsAggregationRequestBody;
}


export class GetBucketsAggregationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getBucketsAggregationResponse?: shared.GetBucketsAggregationResponse;

  @Metadata()
  indexNotReadyException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidAggregationException?: any;

  @Metadata()
  invalidQueryException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
