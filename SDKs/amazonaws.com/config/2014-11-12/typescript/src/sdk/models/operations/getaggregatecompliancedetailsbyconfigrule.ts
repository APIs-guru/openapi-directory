import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAggregateComplianceDetailsByConfigRuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetAggregateComplianceDetailsByConfigRule = "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule"
}


export class GetAggregateComplianceDetailsByConfigRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum;
}


export class GetAggregateComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAggregateComplianceDetailsByConfigRuleQueryParams;

  @Metadata()
  headers: GetAggregateComplianceDetailsByConfigRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAggregateComplianceDetailsByConfigRuleRequest;
}


export class GetAggregateComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAggregateComplianceDetailsByConfigRuleResponse?: shared.GetAggregateComplianceDetailsByConfigRuleResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  noSuchConfigurationAggregatorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
