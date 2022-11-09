import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeComplianceByResourceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeComplianceByResourceXAmzTargetEnum {
    StarlingDoveServiceDescribeComplianceByResource = "StarlingDoveService.DescribeComplianceByResource"
}


export class DescribeComplianceByResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeComplianceByResourceXAmzTargetEnum;
}


export class DescribeComplianceByResourceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeComplianceByResourceQueryParams;

  @Metadata()
  headers: DescribeComplianceByResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeComplianceByResourceRequest;
}


export class DescribeComplianceByResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeComplianceByResourceResponse?: shared.DescribeComplianceByResourceResponse;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  statusCode: number;
}
