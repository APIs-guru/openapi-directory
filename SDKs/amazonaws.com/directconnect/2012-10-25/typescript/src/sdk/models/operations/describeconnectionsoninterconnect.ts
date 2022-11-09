import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeConnectionsOnInterconnectXAmzTargetEnum {
    OvertureServiceDescribeConnectionsOnInterconnect = "OvertureService.DescribeConnectionsOnInterconnect"
}


export class DescribeConnectionsOnInterconnectHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConnectionsOnInterconnectXAmzTargetEnum;
}


export class DescribeConnectionsOnInterconnectRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeConnectionsOnInterconnectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConnectionsOnInterconnectRequest;
}


export class DescribeConnectionsOnInterconnectResponse extends SpeakeasyBase {
  @Metadata()
  connections?: shared.Connections;

  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
