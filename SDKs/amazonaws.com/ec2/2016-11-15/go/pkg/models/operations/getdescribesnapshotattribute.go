package operations




type GetDescribeSnapshotAttributeActionEnum string

const (
    GetDescribeSnapshotAttributeActionEnumDescribeSnapshotAttribute GetDescribeSnapshotAttributeActionEnum = "DescribeSnapshotAttribute"
)



type GetDescribeSnapshotAttributeAttributeEnum string

const (
    GetDescribeSnapshotAttributeAttributeEnumProductCodes GetDescribeSnapshotAttributeAttributeEnum = "productCodes"
GetDescribeSnapshotAttributeAttributeEnumCreateVolumePermission GetDescribeSnapshotAttributeAttributeEnum = "createVolumePermission"
)



type GetDescribeSnapshotAttributeVersionEnum string

const (
    GetDescribeSnapshotAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeSnapshotAttributeVersionEnum = "2016-11-15"
)


type GetDescribeSnapshotAttributeQueryParams struct {
    Action GetDescribeSnapshotAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Attribute GetDescribeSnapshotAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    SnapshotID string `queryParam:"style=form,explode=true,name=SnapshotId"`
    Version GetDescribeSnapshotAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeSnapshotAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeSnapshotAttributeRequest struct {
    QueryParams GetDescribeSnapshotAttributeQueryParams 
    Headers GetDescribeSnapshotAttributeHeaders 
    
}

type GetDescribeSnapshotAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

