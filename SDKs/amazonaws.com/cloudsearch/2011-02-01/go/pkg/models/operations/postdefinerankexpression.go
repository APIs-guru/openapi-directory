package operations




type PostDefineRankExpressionActionEnum string

const (
    PostDefineRankExpressionActionEnumDefineRankExpression PostDefineRankExpressionActionEnum = "DefineRankExpression"
)



type PostDefineRankExpressionVersionEnum string

const (
    PostDefineRankExpressionVersionEnumTwoThousandAndEleven0201 PostDefineRankExpressionVersionEnum = "2011-02-01"
)


type PostDefineRankExpressionQueryParams struct {
    Action PostDefineRankExpressionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDefineRankExpressionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDefineRankExpressionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDefineRankExpressionRequest struct {
    QueryParams PostDefineRankExpressionQueryParams 
    Headers PostDefineRankExpressionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDefineRankExpressionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

