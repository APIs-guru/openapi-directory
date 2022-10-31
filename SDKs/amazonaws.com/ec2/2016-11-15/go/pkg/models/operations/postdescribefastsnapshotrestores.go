package operations




type PostDescribeFastSnapshotRestoresActionEnum string

const (
    PostDescribeFastSnapshotRestoresActionEnumDescribeFastSnapshotRestores PostDescribeFastSnapshotRestoresActionEnum = "DescribeFastSnapshotRestores"
)



type PostDescribeFastSnapshotRestoresVersionEnum string

const (
    PostDescribeFastSnapshotRestoresVersionEnumTwoThousandAndSixteen1115 PostDescribeFastSnapshotRestoresVersionEnum = "2016-11-15"
)


type PostDescribeFastSnapshotRestoresQueryParams struct {
    Action PostDescribeFastSnapshotRestoresActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeFastSnapshotRestoresVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeFastSnapshotRestoresHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeFastSnapshotRestoresRequest struct {
    QueryParams PostDescribeFastSnapshotRestoresQueryParams 
    Headers PostDescribeFastSnapshotRestoresHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeFastSnapshotRestoresResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

