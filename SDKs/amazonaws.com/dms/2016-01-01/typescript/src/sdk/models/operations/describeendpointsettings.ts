import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeEndpointSettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribeEndpointSettingsXAmzTargetEnum {
    AmazonDmSv20160101DescribeEndpointSettings = "AmazonDMSv20160101.DescribeEndpointSettings"
}


export class DescribeEndpointSettingsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEndpointSettingsXAmzTargetEnum;
}


export class DescribeEndpointSettingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeEndpointSettingsQueryParams;

  @Metadata()
  headers: DescribeEndpointSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEndpointSettingsMessage;
}


export class DescribeEndpointSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEndpointSettingsResponse?: shared.DescribeEndpointSettingsResponse;

  @Metadata()
  statusCode: number;
}
