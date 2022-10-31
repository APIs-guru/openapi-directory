package operations

type GetResetSnapshotAttributeActionEnum string

const (
	GetResetSnapshotAttributeActionEnumResetSnapshotAttribute GetResetSnapshotAttributeActionEnum = "ResetSnapshotAttribute"
)

type GetResetSnapshotAttributeAttributeEnum string

const (
	GetResetSnapshotAttributeAttributeEnumProductCodes           GetResetSnapshotAttributeAttributeEnum = "productCodes"
	GetResetSnapshotAttributeAttributeEnumCreateVolumePermission GetResetSnapshotAttributeAttributeEnum = "createVolumePermission"
)

type GetResetSnapshotAttributeVersionEnum string

const (
	GetResetSnapshotAttributeVersionEnumTwoThousandAndSixteen1115 GetResetSnapshotAttributeVersionEnum = "2016-11-15"
)

type GetResetSnapshotAttributeQueryParams struct {
	Action     GetResetSnapshotAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Attribute  GetResetSnapshotAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun     *bool                                  `queryParam:"style=form,explode=true,name=DryRun"`
	SnapshotID string                                 `queryParam:"style=form,explode=true,name=SnapshotId"`
	Version    GetResetSnapshotAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetResetSnapshotAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetResetSnapshotAttributeRequest struct {
	QueryParams GetResetSnapshotAttributeQueryParams
	Headers     GetResetSnapshotAttributeHeaders
}

type GetResetSnapshotAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
