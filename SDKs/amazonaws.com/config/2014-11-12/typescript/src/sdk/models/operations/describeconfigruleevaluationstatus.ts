import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeConfigRuleEvaluationStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeConfigRuleEvaluationStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigRuleEvaluationStatus = "StarlingDoveService.DescribeConfigRuleEvaluationStatus"
}


export class DescribeConfigRuleEvaluationStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConfigRuleEvaluationStatusXAmzTargetEnum;
}


export class DescribeConfigRuleEvaluationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeConfigRuleEvaluationStatusQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeConfigRuleEvaluationStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConfigRuleEvaluationStatusRequest;
}


export class DescribeConfigRuleEvaluationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeConfigRuleEvaluationStatusResponse?: shared.DescribeConfigRuleEvaluationStatusResponse;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  noSuchConfigRuleException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
