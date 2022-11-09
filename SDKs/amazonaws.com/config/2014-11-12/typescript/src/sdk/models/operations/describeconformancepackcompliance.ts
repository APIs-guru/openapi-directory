import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConformancePackComplianceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeConformancePackComplianceXAmzTargetEnum {
    StarlingDoveServiceDescribeConformancePackCompliance = "StarlingDoveService.DescribeConformancePackCompliance"
}


export class DescribeConformancePackComplianceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConformancePackComplianceXAmzTargetEnum;
}


export class DescribeConformancePackComplianceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeConformancePackComplianceQueryParams;

  @Metadata()
  headers: DescribeConformancePackComplianceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConformancePackComplianceRequest;
}


export class DescribeConformancePackComplianceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConformancePackComplianceResponse?: shared.DescribeConformancePackComplianceResponse;

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
