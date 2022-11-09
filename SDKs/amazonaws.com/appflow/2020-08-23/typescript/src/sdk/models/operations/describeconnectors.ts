import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConnectorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeConnectorsHeaders extends SpeakeasyBase {
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
}


export class DescribeConnectorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorTypes" })
  connectorTypes?: shared.ConnectorTypeEnum[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class DescribeConnectorsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeConnectorsQueryParams;

  @Metadata()
  headers: DescribeConnectorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeConnectorsRequestBody;
}


export class DescribeConnectorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConnectorsResponse?: shared.DescribeConnectorsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
