import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeEndpointsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeEndpointsXAmzTargetEnum {
    AmazonDmSv20160101DescribeEndpoints = "AmazonDMSv20160101.DescribeEndpoints"
}


export class DescribeEndpointsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEndpointsXAmzTargetEnum;
}


export class DescribeEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeEndpointsQueryParams;

  @Metadata()
  headers: DescribeEndpointsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEndpointsMessage;
}


export class DescribeEndpointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEndpointsResponse?: shared.DescribeEndpointsResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
