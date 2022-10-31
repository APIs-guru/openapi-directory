package operations




type GetGetEbsEncryptionByDefaultActionEnum string

const (
    GetGetEbsEncryptionByDefaultActionEnumGetEbsEncryptionByDefault GetGetEbsEncryptionByDefaultActionEnum = "GetEbsEncryptionByDefault"
)



type GetGetEbsEncryptionByDefaultVersionEnum string

const (
    GetGetEbsEncryptionByDefaultVersionEnumTwoThousandAndSixteen1115 GetGetEbsEncryptionByDefaultVersionEnum = "2016-11-15"
)


type GetGetEbsEncryptionByDefaultQueryParams struct {
    Action GetGetEbsEncryptionByDefaultActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetGetEbsEncryptionByDefaultVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetEbsEncryptionByDefaultHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetEbsEncryptionByDefaultRequest struct {
    QueryParams GetGetEbsEncryptionByDefaultQueryParams 
    Headers GetGetEbsEncryptionByDefaultHeaders 
    
}

type GetGetEbsEncryptionByDefaultResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

