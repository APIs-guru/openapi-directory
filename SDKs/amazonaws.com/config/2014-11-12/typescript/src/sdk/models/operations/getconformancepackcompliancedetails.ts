import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConformancePackComplianceDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetConformancePackComplianceDetailsXAmzTargetEnum {
    StarlingDoveServiceGetConformancePackComplianceDetails = "StarlingDoveService.GetConformancePackComplianceDetails"
}


export class GetConformancePackComplianceDetailsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetConformancePackComplianceDetailsXAmzTargetEnum;
}


export class GetConformancePackComplianceDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConformancePackComplianceDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: GetConformancePackComplianceDetailsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetConformancePackComplianceDetailsRequest;
}


export class GetConformancePackComplianceDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConformancePackComplianceDetailsResponse?: shared.GetConformancePackComplianceDetailsResponse;

  @SpeakeasyMetadata()
  invalidLimitException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  noSuchConfigRuleInConformancePackException?: any;

  @SpeakeasyMetadata()
  noSuchConformancePackException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
