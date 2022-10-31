package operations




type PostGetCapacityReservationUsageActionEnum string

const (
    PostGetCapacityReservationUsageActionEnumGetCapacityReservationUsage PostGetCapacityReservationUsageActionEnum = "GetCapacityReservationUsage"
)



type PostGetCapacityReservationUsageVersionEnum string

const (
    PostGetCapacityReservationUsageVersionEnumTwoThousandAndSixteen1115 PostGetCapacityReservationUsageVersionEnum = "2016-11-15"
)


type PostGetCapacityReservationUsageQueryParams struct {
    Action PostGetCapacityReservationUsageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetCapacityReservationUsageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetCapacityReservationUsageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetCapacityReservationUsageRequest struct {
    QueryParams PostGetCapacityReservationUsageQueryParams 
    Headers PostGetCapacityReservationUsageHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetCapacityReservationUsageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

