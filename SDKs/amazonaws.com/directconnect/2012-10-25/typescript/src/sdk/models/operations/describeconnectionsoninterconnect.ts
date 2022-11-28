import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeConnectionsOnInterconnectXAmzTargetEnum {
    OvertureServiceDescribeConnectionsOnInterconnect = "OvertureService.DescribeConnectionsOnInterconnect"
}


export class DescribeConnectionsOnInterconnectHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConnectionsOnInterconnectXAmzTargetEnum;
}


export class DescribeConnectionsOnInterconnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeConnectionsOnInterconnectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConnectionsOnInterconnectRequest;
}


export class DescribeConnectionsOnInterconnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connections?: shared.Connections;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directConnectClientException?: any;

  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
