package operations




type GetGetCapacityReservationUsageActionEnum string

const (
    GetGetCapacityReservationUsageActionEnumGetCapacityReservationUsage GetGetCapacityReservationUsageActionEnum = "GetCapacityReservationUsage"
)



type GetGetCapacityReservationUsageVersionEnum string

const (
    GetGetCapacityReservationUsageVersionEnumTwoThousandAndSixteen1115 GetGetCapacityReservationUsageVersionEnum = "2016-11-15"
)


type GetGetCapacityReservationUsageQueryParams struct {
    Action GetGetCapacityReservationUsageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CapacityReservationID string `queryParam:"style=form,explode=true,name=CapacityReservationId"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetGetCapacityReservationUsageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetCapacityReservationUsageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetCapacityReservationUsageRequest struct {
    QueryParams GetGetCapacityReservationUsageQueryParams 
    Headers GetGetCapacityReservationUsageHeaders 
    
}

type GetGetCapacityReservationUsageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

