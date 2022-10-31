package operations




type GetCancelCapacityReservationActionEnum string

const (
    GetCancelCapacityReservationActionEnumCancelCapacityReservation GetCancelCapacityReservationActionEnum = "CancelCapacityReservation"
)



type GetCancelCapacityReservationVersionEnum string

const (
    GetCancelCapacityReservationVersionEnumTwoThousandAndSixteen1115 GetCancelCapacityReservationVersionEnum = "2016-11-15"
)


type GetCancelCapacityReservationQueryParams struct {
    Action GetCancelCapacityReservationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CapacityReservationID string `queryParam:"style=form,explode=true,name=CapacityReservationId"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetCancelCapacityReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCancelCapacityReservationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCancelCapacityReservationRequest struct {
    QueryParams GetCancelCapacityReservationQueryParams 
    Headers GetCancelCapacityReservationHeaders 
    
}

type GetCancelCapacityReservationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

