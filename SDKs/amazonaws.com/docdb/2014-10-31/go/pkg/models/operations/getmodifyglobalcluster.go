package operations

type GetModifyGlobalClusterActionEnum string

const (
	GetModifyGlobalClusterActionEnumModifyGlobalCluster GetModifyGlobalClusterActionEnum = "ModifyGlobalCluster"
)

type GetModifyGlobalClusterVersionEnum string

const (
	GetModifyGlobalClusterVersionEnumTwoThousandAndFourteen1031 GetModifyGlobalClusterVersionEnum = "2014-10-31"
)

type GetModifyGlobalClusterQueryParams struct {
	Action                     GetModifyGlobalClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DeletionProtection         *bool                             `queryParam:"style=form,explode=true,name=DeletionProtection"`
	GlobalClusterIdentifier    string                            `queryParam:"style=form,explode=true,name=GlobalClusterIdentifier"`
	NewGlobalClusterIdentifier *string                           `queryParam:"style=form,explode=true,name=NewGlobalClusterIdentifier"`
	Version                    GetModifyGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyGlobalClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyGlobalClusterRequest struct {
	QueryParams GetModifyGlobalClusterQueryParams
	Headers     GetModifyGlobalClusterHeaders
}

type GetModifyGlobalClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
