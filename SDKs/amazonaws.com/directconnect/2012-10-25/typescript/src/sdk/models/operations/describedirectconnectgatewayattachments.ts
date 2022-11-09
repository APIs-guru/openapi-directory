import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAttachments = "OvertureService.DescribeDirectConnectGatewayAttachments"
}


export class DescribeDirectConnectGatewayAttachmentsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum;
}


export class DescribeDirectConnectGatewayAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDirectConnectGatewayAttachmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDirectConnectGatewayAttachmentsRequest;
}


export class DescribeDirectConnectGatewayAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDirectConnectGatewayAttachmentsResult?: shared.DescribeDirectConnectGatewayAttachmentsResult;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
