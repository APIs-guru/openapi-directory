package operations

type GetTestFailoverActionEnum string

const (
	GetTestFailoverActionEnumTestFailover GetTestFailoverActionEnum = "TestFailover"
)

type GetTestFailoverVersionEnum string

const (
	GetTestFailoverVersionEnumTwoThousandAndFifteen0202 GetTestFailoverVersionEnum = "2015-02-02"
)

type GetTestFailoverQueryParams struct {
	Action             GetTestFailoverActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	NodeGroupID        string                     `queryParam:"style=form,explode=true,name=NodeGroupId"`
	ReplicationGroupID string                     `queryParam:"style=form,explode=true,name=ReplicationGroupId"`
	Version            GetTestFailoverVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetTestFailoverHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTestFailoverRequest struct {
	QueryParams GetTestFailoverQueryParams
	Headers     GetTestFailoverHeaders
}

type GetTestFailoverResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
