package operations

type GetCopyImageActionEnum string

const (
	GetCopyImageActionEnumCopyImage GetCopyImageActionEnum = "CopyImage"
)

type GetCopyImageVersionEnum string

const (
	GetCopyImageVersionEnumTwoThousandAndSixteen1115 GetCopyImageVersionEnum = "2016-11-15"
)

type GetCopyImageQueryParams struct {
	Action                GetCopyImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientToken           *string                 `queryParam:"style=form,explode=true,name=ClientToken"`
	Description           *string                 `queryParam:"style=form,explode=true,name=Description"`
	DestinationOutpostArn *string                 `queryParam:"style=form,explode=true,name=DestinationOutpostArn"`
	DryRun                *bool                   `queryParam:"style=form,explode=true,name=DryRun"`
	Encrypted             *bool                   `queryParam:"style=form,explode=true,name=Encrypted"`
	KmsKeyID              *string                 `queryParam:"style=form,explode=true,name=KmsKeyId"`
	Name                  string                  `queryParam:"style=form,explode=true,name=Name"`
	SourceImageID         string                  `queryParam:"style=form,explode=true,name=SourceImageId"`
	SourceRegion          string                  `queryParam:"style=form,explode=true,name=SourceRegion"`
	Version               GetCopyImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCopyImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCopyImageRequest struct {
	QueryParams GetCopyImageQueryParams
	Headers     GetCopyImageHeaders
}

type GetCopyImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
