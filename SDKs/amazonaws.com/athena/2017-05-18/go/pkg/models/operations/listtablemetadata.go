package operations

import (
"openapi/pkg/models/shared")

type ListTableMetadataQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListTableMetadataXAmzTargetEnum string

const (
    ListTableMetadataXAmzTargetEnumAmazonAthenaListTableMetadata ListTableMetadataXAmzTargetEnum = "AmazonAthena.ListTableMetadata"
)


type ListTableMetadataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTableMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTableMetadataRequest struct {
    QueryParams ListTableMetadataQueryParams 
    Headers ListTableMetadataHeaders 
    Request shared.ListTableMetadataInput `request:"mediaType=application/json"`
    
}

type ListTableMetadataResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListTableMetadataOutput *shared.ListTableMetadataOutput 
    MetadataException *interface{} 
    StatusCode int64 
    
}

