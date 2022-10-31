package operations

import (
"openapi/pkg/models/shared")

type ListDataCatalogsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListDataCatalogsXAmzTargetEnum string

const (
    ListDataCatalogsXAmzTargetEnumAmazonAthenaListDataCatalogs ListDataCatalogsXAmzTargetEnum = "AmazonAthena.ListDataCatalogs"
)


type ListDataCatalogsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDataCatalogsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDataCatalogsRequest struct {
    QueryParams ListDataCatalogsQueryParams 
    Headers ListDataCatalogsHeaders 
    Request shared.ListDataCatalogsInput `request:"mediaType=application/json"`
    
}

type ListDataCatalogsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListDataCatalogsOutput *shared.ListDataCatalogsOutput 
    StatusCode int64 
    
}

