import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConformancePackComplianceDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetConformancePackComplianceDetailsXAmzTargetEnum {
    StarlingDoveServiceGetConformancePackComplianceDetails = "StarlingDoveService.GetConformancePackComplianceDetails"
}


export class GetConformancePackComplianceDetailsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetConformancePackComplianceDetailsXAmzTargetEnum;
}


export class GetConformancePackComplianceDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConformancePackComplianceDetailsQueryParams;

  @Metadata()
  headers: GetConformancePackComplianceDetailsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetConformancePackComplianceDetailsRequest;
}


export class GetConformancePackComplianceDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getConformancePackComplianceDetailsResponse?: shared.GetConformancePackComplianceDetailsResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  noSuchConfigRuleInConformancePackException?: any;

  @Metadata()
  noSuchConformancePackException?: any;

  @Metadata()
  statusCode: number;
}
