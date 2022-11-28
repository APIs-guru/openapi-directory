import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAggregateConformancePackComplianceSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetAggregateConformancePackComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetAggregateConformancePackComplianceSummary = "StarlingDoveService.GetAggregateConformancePackComplianceSummary"
}


export class GetAggregateConformancePackComplianceSummaryHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAggregateConformancePackComplianceSummaryXAmzTargetEnum;
}


export class GetAggregateConformancePackComplianceSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAggregateConformancePackComplianceSummaryQueryParams;

  @SpeakeasyMetadata()
  headers: GetAggregateConformancePackComplianceSummaryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetAggregateConformancePackComplianceSummaryRequest;
}


export class GetAggregateConformancePackComplianceSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAggregateConformancePackComplianceSummaryResponse?: shared.GetAggregateConformancePackComplianceSummaryResponse;

  @SpeakeasyMetadata()
  invalidLimitException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  noSuchConfigurationAggregatorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
