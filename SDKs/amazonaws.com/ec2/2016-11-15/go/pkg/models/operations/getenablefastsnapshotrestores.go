package operations




type GetEnableFastSnapshotRestoresActionEnum string

const (
    GetEnableFastSnapshotRestoresActionEnumEnableFastSnapshotRestores GetEnableFastSnapshotRestoresActionEnum = "EnableFastSnapshotRestores"
)



type GetEnableFastSnapshotRestoresVersionEnum string

const (
    GetEnableFastSnapshotRestoresVersionEnumTwoThousandAndSixteen1115 GetEnableFastSnapshotRestoresVersionEnum = "2016-11-15"
)


type GetEnableFastSnapshotRestoresQueryParams struct {
    Action GetEnableFastSnapshotRestoresActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AvailabilityZone []string `queryParam:"style=form,explode=true,name=AvailabilityZone"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    SourceSnapshotID []string `queryParam:"style=form,explode=true,name=SourceSnapshotId"`
    Version GetEnableFastSnapshotRestoresVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetEnableFastSnapshotRestoresHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEnableFastSnapshotRestoresRequest struct {
    QueryParams GetEnableFastSnapshotRestoresQueryParams 
    Headers GetEnableFastSnapshotRestoresHeaders 
    
}

type GetEnableFastSnapshotRestoresResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

