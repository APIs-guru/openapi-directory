import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetComplianceDetailsByConfigRuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetComplianceDetailsByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetComplianceDetailsByConfigRule = "StarlingDoveService.GetComplianceDetailsByConfigRule"
}


export class GetComplianceDetailsByConfigRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetComplianceDetailsByConfigRuleXAmzTargetEnum;
}


export class GetComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetComplianceDetailsByConfigRuleQueryParams;

  @Metadata()
  headers: GetComplianceDetailsByConfigRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetComplianceDetailsByConfigRuleRequest;
}


export class GetComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getComplianceDetailsByConfigRuleResponse?: shared.GetComplianceDetailsByConfigRuleResponse;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  noSuchConfigRuleException?: any;

  @Metadata()
  statusCode: number;
}
