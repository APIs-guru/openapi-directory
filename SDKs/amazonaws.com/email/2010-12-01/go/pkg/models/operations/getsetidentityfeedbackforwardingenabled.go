package operations




type GetSetIdentityFeedbackForwardingEnabledActionEnum string

const (
    GetSetIdentityFeedbackForwardingEnabledActionEnumSetIdentityFeedbackForwardingEnabled GetSetIdentityFeedbackForwardingEnabledActionEnum = "SetIdentityFeedbackForwardingEnabled"
)



type GetSetIdentityFeedbackForwardingEnabledVersionEnum string

const (
    GetSetIdentityFeedbackForwardingEnabledVersionEnumTwoThousandAndTen1201 GetSetIdentityFeedbackForwardingEnabledVersionEnum = "2010-12-01"
)


type GetSetIdentityFeedbackForwardingEnabledQueryParams struct {
    Action GetSetIdentityFeedbackForwardingEnabledActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ForwardingEnabled bool `queryParam:"style=form,explode=true,name=ForwardingEnabled"`
    Identity string `queryParam:"style=form,explode=true,name=Identity"`
    Version GetSetIdentityFeedbackForwardingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetSetIdentityFeedbackForwardingEnabledHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSetIdentityFeedbackForwardingEnabledRequest struct {
    QueryParams GetSetIdentityFeedbackForwardingEnabledQueryParams 
    Headers GetSetIdentityFeedbackForwardingEnabledHeaders 
    
}

type GetSetIdentityFeedbackForwardingEnabledResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

