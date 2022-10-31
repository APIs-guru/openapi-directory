package operations




type PostCreateReservedInstancesListingActionEnum string

const (
    PostCreateReservedInstancesListingActionEnumCreateReservedInstancesListing PostCreateReservedInstancesListingActionEnum = "CreateReservedInstancesListing"
)



type PostCreateReservedInstancesListingVersionEnum string

const (
    PostCreateReservedInstancesListingVersionEnumTwoThousandAndSixteen1115 PostCreateReservedInstancesListingVersionEnum = "2016-11-15"
)


type PostCreateReservedInstancesListingQueryParams struct {
    Action PostCreateReservedInstancesListingActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateReservedInstancesListingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateReservedInstancesListingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateReservedInstancesListingRequest struct {
    QueryParams PostCreateReservedInstancesListingQueryParams 
    Headers PostCreateReservedInstancesListingHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateReservedInstancesListingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

