import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPercentilesHeaders extends SpeakeasyBase {
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


export class GetPercentilesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationField" })
  aggregationField?: string;

  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=percents" })
  percents?: number[];

  @Metadata({ data: "json, name=queryString" })
  queryString: string;

  @Metadata({ data: "json, name=queryVersion" })
  queryVersion?: string;
}


export class GetPercentilesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPercentilesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetPercentilesRequestBody;
}


export class GetPercentilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPercentilesResponse?: shared.GetPercentilesResponse;

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
