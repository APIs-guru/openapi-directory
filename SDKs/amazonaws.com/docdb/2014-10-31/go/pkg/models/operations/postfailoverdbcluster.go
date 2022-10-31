package operations




type PostFailoverDbClusterActionEnum string

const (
    PostFailoverDbClusterActionEnumFailoverDbCluster PostFailoverDbClusterActionEnum = "FailoverDBCluster"
)



type PostFailoverDbClusterVersionEnum string

const (
    PostFailoverDbClusterVersionEnumTwoThousandAndFourteen1031 PostFailoverDbClusterVersionEnum = "2014-10-31"
)


type PostFailoverDbClusterQueryParams struct {
    Action PostFailoverDbClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostFailoverDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostFailoverDbClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostFailoverDbClusterRequest struct {
    QueryParams PostFailoverDbClusterQueryParams 
    Headers PostFailoverDbClusterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostFailoverDbClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

