import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAggregateConfigRuleComplianceSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetAggregateConfigRuleComplianceSummary = "StarlingDoveService.GetAggregateConfigRuleComplianceSummary"
}


export class GetAggregateConfigRuleComplianceSummaryHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum;
}


export class GetAggregateConfigRuleComplianceSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAggregateConfigRuleComplianceSummaryQueryParams;

  @SpeakeasyMetadata()
  headers: GetAggregateConfigRuleComplianceSummaryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetAggregateConfigRuleComplianceSummaryRequest;
}


export class GetAggregateConfigRuleComplianceSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAggregateConfigRuleComplianceSummaryResponse?: shared.GetAggregateConfigRuleComplianceSummaryResponse;

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
