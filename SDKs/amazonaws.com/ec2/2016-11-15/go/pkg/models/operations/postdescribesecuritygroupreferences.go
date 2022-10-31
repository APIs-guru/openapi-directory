package operations




type PostDescribeSecurityGroupReferencesActionEnum string

const (
    PostDescribeSecurityGroupReferencesActionEnumDescribeSecurityGroupReferences PostDescribeSecurityGroupReferencesActionEnum = "DescribeSecurityGroupReferences"
)



type PostDescribeSecurityGroupReferencesVersionEnum string

const (
    PostDescribeSecurityGroupReferencesVersionEnumTwoThousandAndSixteen1115 PostDescribeSecurityGroupReferencesVersionEnum = "2016-11-15"
)


type PostDescribeSecurityGroupReferencesQueryParams struct {
    Action PostDescribeSecurityGroupReferencesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeSecurityGroupReferencesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeSecurityGroupReferencesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeSecurityGroupReferencesRequest struct {
    QueryParams PostDescribeSecurityGroupReferencesQueryParams 
    Headers PostDescribeSecurityGroupReferencesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeSecurityGroupReferencesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

