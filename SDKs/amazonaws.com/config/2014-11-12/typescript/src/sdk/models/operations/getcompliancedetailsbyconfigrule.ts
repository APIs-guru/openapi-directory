import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetComplianceDetailsByConfigRuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetComplianceDetailsByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetComplianceDetailsByConfigRule = "StarlingDoveService.GetComplianceDetailsByConfigRule"
}


export class GetComplianceDetailsByConfigRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetComplianceDetailsByConfigRuleXAmzTargetEnum;
}


export class GetComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetComplianceDetailsByConfigRuleQueryParams;

  @SpeakeasyMetadata()
  headers: GetComplianceDetailsByConfigRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetComplianceDetailsByConfigRuleRequest;
}


export class GetComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getComplianceDetailsByConfigRuleResponse?: shared.GetComplianceDetailsByConfigRuleResponse;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  noSuchConfigRuleException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
