package operations




type GetSetDefaultPolicyVersionActionEnum string

const (
    GetSetDefaultPolicyVersionActionEnumSetDefaultPolicyVersion GetSetDefaultPolicyVersionActionEnum = "SetDefaultPolicyVersion"
)



type GetSetDefaultPolicyVersionVersionEnum string

const (
    GetSetDefaultPolicyVersionVersionEnumTwoThousandAndTen0508 GetSetDefaultPolicyVersionVersionEnum = "2010-05-08"
)


type GetSetDefaultPolicyVersionQueryParams struct {
    Action GetSetDefaultPolicyVersionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    PolicyArn string `queryParam:"style=form,explode=true,name=PolicyArn"`
    Version GetSetDefaultPolicyVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VersionID string `queryParam:"style=form,explode=true,name=VersionId"`
    
}

type GetSetDefaultPolicyVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSetDefaultPolicyVersionRequest struct {
    QueryParams GetSetDefaultPolicyVersionQueryParams 
    Headers GetSetDefaultPolicyVersionHeaders 
    
}

type GetSetDefaultPolicyVersionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

