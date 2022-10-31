package operations




type PostDeprovisionByoipCidrActionEnum string

const (
    PostDeprovisionByoipCidrActionEnumDeprovisionByoipCidr PostDeprovisionByoipCidrActionEnum = "DeprovisionByoipCidr"
)



type PostDeprovisionByoipCidrVersionEnum string

const (
    PostDeprovisionByoipCidrVersionEnumTwoThousandAndSixteen1115 PostDeprovisionByoipCidrVersionEnum = "2016-11-15"
)


type PostDeprovisionByoipCidrQueryParams struct {
    Action PostDeprovisionByoipCidrActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeprovisionByoipCidrVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeprovisionByoipCidrHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeprovisionByoipCidrRequest struct {
    QueryParams PostDeprovisionByoipCidrQueryParams 
    Headers PostDeprovisionByoipCidrHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeprovisionByoipCidrResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

