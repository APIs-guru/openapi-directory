import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAssociationProposals = "OvertureService.DescribeDirectConnectGatewayAssociationProposals"
}


export class DescribeDirectConnectGatewayAssociationProposalsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum;
}


export class DescribeDirectConnectGatewayAssociationProposalsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDirectConnectGatewayAssociationProposalsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDirectConnectGatewayAssociationProposalsRequest;
}


export class DescribeDirectConnectGatewayAssociationProposalsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDirectConnectGatewayAssociationProposalsResult?: shared.DescribeDirectConnectGatewayAssociationProposalsResult;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
