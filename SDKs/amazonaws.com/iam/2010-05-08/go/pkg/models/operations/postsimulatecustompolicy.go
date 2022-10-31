package operations




type PostSimulateCustomPolicyActionEnum string

const (
    PostSimulateCustomPolicyActionEnumSimulateCustomPolicy PostSimulateCustomPolicyActionEnum = "SimulateCustomPolicy"
)



type PostSimulateCustomPolicyVersionEnum string

const (
    PostSimulateCustomPolicyVersionEnumTwoThousandAndTen0508 PostSimulateCustomPolicyVersionEnum = "2010-05-08"
)


type PostSimulateCustomPolicyQueryParams struct {
    Action PostSimulateCustomPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Version PostSimulateCustomPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSimulateCustomPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSimulateCustomPolicyRequest struct {
    QueryParams PostSimulateCustomPolicyQueryParams 
    Headers PostSimulateCustomPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSimulateCustomPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

