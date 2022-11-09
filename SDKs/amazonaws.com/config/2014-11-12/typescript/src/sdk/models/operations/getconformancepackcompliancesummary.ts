import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConformancePackComplianceSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetConformancePackComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetConformancePackComplianceSummary = "StarlingDoveService.GetConformancePackComplianceSummary"
}


export class GetConformancePackComplianceSummaryHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetConformancePackComplianceSummaryXAmzTargetEnum;
}


export class GetConformancePackComplianceSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConformancePackComplianceSummaryQueryParams;

  @Metadata()
  headers: GetConformancePackComplianceSummaryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetConformancePackComplianceSummaryRequest;
}


export class GetConformancePackComplianceSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getConformancePackComplianceSummaryResponse?: shared.GetConformancePackComplianceSummaryResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  noSuchConformancePackException?: any;

  @Metadata()
  statusCode: number;
}
