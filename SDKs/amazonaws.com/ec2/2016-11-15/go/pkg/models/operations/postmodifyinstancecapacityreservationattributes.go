package operations




type PostModifyInstanceCapacityReservationAttributesActionEnum string

const (
    PostModifyInstanceCapacityReservationAttributesActionEnumModifyInstanceCapacityReservationAttributes PostModifyInstanceCapacityReservationAttributesActionEnum = "ModifyInstanceCapacityReservationAttributes"
)



type PostModifyInstanceCapacityReservationAttributesVersionEnum string

const (
    PostModifyInstanceCapacityReservationAttributesVersionEnumTwoThousandAndSixteen1115 PostModifyInstanceCapacityReservationAttributesVersionEnum = "2016-11-15"
)


type PostModifyInstanceCapacityReservationAttributesQueryParams struct {
    Action PostModifyInstanceCapacityReservationAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyInstanceCapacityReservationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyInstanceCapacityReservationAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyInstanceCapacityReservationAttributesRequest struct {
    QueryParams PostModifyInstanceCapacityReservationAttributesQueryParams 
    Headers PostModifyInstanceCapacityReservationAttributesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyInstanceCapacityReservationAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

