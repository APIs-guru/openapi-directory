package operations




type PostCancelCapacityReservationActionEnum string

const (
    PostCancelCapacityReservationActionEnumCancelCapacityReservation PostCancelCapacityReservationActionEnum = "CancelCapacityReservation"
)



type PostCancelCapacityReservationVersionEnum string

const (
    PostCancelCapacityReservationVersionEnumTwoThousandAndSixteen1115 PostCancelCapacityReservationVersionEnum = "2016-11-15"
)


type PostCancelCapacityReservationQueryParams struct {
    Action PostCancelCapacityReservationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCancelCapacityReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCancelCapacityReservationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCancelCapacityReservationRequest struct {
    QueryParams PostCancelCapacityReservationQueryParams 
    Headers PostCancelCapacityReservationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCancelCapacityReservationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

