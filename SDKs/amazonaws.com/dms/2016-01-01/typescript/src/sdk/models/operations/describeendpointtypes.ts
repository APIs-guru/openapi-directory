import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeEndpointTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeEndpointTypesXAmzTargetEnum {
    AmazonDmSv20160101DescribeEndpointTypes = "AmazonDMSv20160101.DescribeEndpointTypes"
}


export class DescribeEndpointTypesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEndpointTypesXAmzTargetEnum;
}


export class DescribeEndpointTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeEndpointTypesQueryParams;

  @Metadata()
  headers: DescribeEndpointTypesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEndpointTypesMessage;
}


export class DescribeEndpointTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEndpointTypesResponse?: shared.DescribeEndpointTypesResponse;

  @Metadata()
  statusCode: number;
}
