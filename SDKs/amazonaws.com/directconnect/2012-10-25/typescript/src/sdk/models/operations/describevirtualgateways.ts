import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeVirtualGatewaysXAmzTargetEnum {
    OvertureServiceDescribeVirtualGateways = "OvertureService.DescribeVirtualGateways"
}


export class DescribeVirtualGatewaysHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeVirtualGatewaysXAmzTargetEnum;
}


export class DescribeVirtualGatewaysRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeVirtualGatewaysHeaders;
}


export class DescribeVirtualGatewaysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualGateways?: shared.VirtualGateways;
}
