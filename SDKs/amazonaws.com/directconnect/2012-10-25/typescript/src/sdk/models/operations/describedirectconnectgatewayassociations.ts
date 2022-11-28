import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeDirectConnectGatewayAssociationsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAssociations = "OvertureService.DescribeDirectConnectGatewayAssociations"
}


export class DescribeDirectConnectGatewayAssociationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDirectConnectGatewayAssociationsXAmzTargetEnum;
}


export class DescribeDirectConnectGatewayAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeDirectConnectGatewayAssociationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDirectConnectGatewayAssociationsRequest;
}


export class DescribeDirectConnectGatewayAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeDirectConnectGatewayAssociationsResult?: shared.DescribeDirectConnectGatewayAssociationsResult;

  @SpeakeasyMetadata()
  directConnectClientException?: any;

  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
