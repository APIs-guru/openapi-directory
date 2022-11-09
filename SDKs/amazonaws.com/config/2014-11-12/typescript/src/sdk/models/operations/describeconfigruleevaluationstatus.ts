import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConfigRuleEvaluationStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeConfigRuleEvaluationStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigRuleEvaluationStatus = "StarlingDoveService.DescribeConfigRuleEvaluationStatus"
}


export class DescribeConfigRuleEvaluationStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigRuleEvaluationStatusXAmzTargetEnum;
}


export class DescribeConfigRuleEvaluationStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeConfigRuleEvaluationStatusQueryParams;

  @Metadata()
  headers: DescribeConfigRuleEvaluationStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigRuleEvaluationStatusRequest;
}


export class DescribeConfigRuleEvaluationStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConfigRuleEvaluationStatusResponse?: shared.DescribeConfigRuleEvaluationStatusResponse;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  noSuchConfigRuleException?: any;

  @Metadata()
  statusCode: number;
}
