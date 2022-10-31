package operations

type PostDecreaseReplicaCountActionEnum string

const (
	PostDecreaseReplicaCountActionEnumDecreaseReplicaCount PostDecreaseReplicaCountActionEnum = "DecreaseReplicaCount"
)

type PostDecreaseReplicaCountVersionEnum string

const (
	PostDecreaseReplicaCountVersionEnumTwoThousandAndFifteen0202 PostDecreaseReplicaCountVersionEnum = "2015-02-02"
)

type PostDecreaseReplicaCountQueryParams struct {
	Action  PostDecreaseReplicaCountActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDecreaseReplicaCountVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDecreaseReplicaCountHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDecreaseReplicaCountRequest struct {
	QueryParams PostDecreaseReplicaCountQueryParams
	Headers     PostDecreaseReplicaCountHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDecreaseReplicaCountResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
