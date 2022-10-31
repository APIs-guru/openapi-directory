package operations




type PostCancelReservedInstancesListingActionEnum string

const (
    PostCancelReservedInstancesListingActionEnumCancelReservedInstancesListing PostCancelReservedInstancesListingActionEnum = "CancelReservedInstancesListing"
)



type PostCancelReservedInstancesListingVersionEnum string

const (
    PostCancelReservedInstancesListingVersionEnumTwoThousandAndSixteen1115 PostCancelReservedInstancesListingVersionEnum = "2016-11-15"
)


type PostCancelReservedInstancesListingQueryParams struct {
    Action PostCancelReservedInstancesListingActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCancelReservedInstancesListingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCancelReservedInstancesListingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCancelReservedInstancesListingRequest struct {
    QueryParams PostCancelReservedInstancesListingQueryParams 
    Headers PostCancelReservedInstancesListingHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCancelReservedInstancesListingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

