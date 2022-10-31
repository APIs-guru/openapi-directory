package operations




type PostDescribeIamInstanceProfileAssociationsActionEnum string

const (
    PostDescribeIamInstanceProfileAssociationsActionEnumDescribeIamInstanceProfileAssociations PostDescribeIamInstanceProfileAssociationsActionEnum = "DescribeIamInstanceProfileAssociations"
)



type PostDescribeIamInstanceProfileAssociationsVersionEnum string

const (
    PostDescribeIamInstanceProfileAssociationsVersionEnumTwoThousandAndSixteen1115 PostDescribeIamInstanceProfileAssociationsVersionEnum = "2016-11-15"
)


type PostDescribeIamInstanceProfileAssociationsQueryParams struct {
    Action PostDescribeIamInstanceProfileAssociationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeIamInstanceProfileAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeIamInstanceProfileAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeIamInstanceProfileAssociationsRequest struct {
    QueryParams PostDescribeIamInstanceProfileAssociationsQueryParams 
    Headers PostDescribeIamInstanceProfileAssociationsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeIamInstanceProfileAssociationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

