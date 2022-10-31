package operations

import (
"openapi/pkg/models/shared")


type DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum string

const (
    DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnumOvertureServiceDescribeDirectConnectGatewayAssociationProposals DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum = "OvertureService.DescribeDirectConnectGatewayAssociationProposals"
)


type DescribeDirectConnectGatewayAssociationProposalsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDirectConnectGatewayAssociationProposalsRequest struct {
    Headers DescribeDirectConnectGatewayAssociationProposalsHeaders 
    Request shared.DescribeDirectConnectGatewayAssociationProposalsRequest `request:"mediaType=application/json"`
    
}

type DescribeDirectConnectGatewayAssociationProposalsResponse struct {
    ContentType string 
    DescribeDirectConnectGatewayAssociationProposalsResult *shared.DescribeDirectConnectGatewayAssociationProposalsResult 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

