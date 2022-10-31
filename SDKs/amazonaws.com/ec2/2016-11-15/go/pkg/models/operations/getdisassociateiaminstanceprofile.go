package operations




type GetDisassociateIamInstanceProfileActionEnum string

const (
    GetDisassociateIamInstanceProfileActionEnumDisassociateIamInstanceProfile GetDisassociateIamInstanceProfileActionEnum = "DisassociateIamInstanceProfile"
)



type GetDisassociateIamInstanceProfileVersionEnum string

const (
    GetDisassociateIamInstanceProfileVersionEnumTwoThousandAndSixteen1115 GetDisassociateIamInstanceProfileVersionEnum = "2016-11-15"
)


type GetDisassociateIamInstanceProfileQueryParams struct {
    Action GetDisassociateIamInstanceProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AssociationID string `queryParam:"style=form,explode=true,name=AssociationId"`
    Version GetDisassociateIamInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisassociateIamInstanceProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisassociateIamInstanceProfileRequest struct {
    QueryParams GetDisassociateIamInstanceProfileQueryParams 
    Headers GetDisassociateIamInstanceProfileHeaders 
    
}

type GetDisassociateIamInstanceProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

