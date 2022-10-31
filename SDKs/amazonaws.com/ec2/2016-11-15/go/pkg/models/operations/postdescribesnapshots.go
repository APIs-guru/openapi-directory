package operations




type PostDescribeSnapshotsActionEnum string

const (
    PostDescribeSnapshotsActionEnumDescribeSnapshots PostDescribeSnapshotsActionEnum = "DescribeSnapshots"
)



type PostDescribeSnapshotsVersionEnum string

const (
    PostDescribeSnapshotsVersionEnumTwoThousandAndSixteen1115 PostDescribeSnapshotsVersionEnum = "2016-11-15"
)


type PostDescribeSnapshotsQueryParams struct {
    Action PostDescribeSnapshotsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeSnapshotsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeSnapshotsRequest struct {
    QueryParams PostDescribeSnapshotsQueryParams 
    Headers PostDescribeSnapshotsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeSnapshotsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

