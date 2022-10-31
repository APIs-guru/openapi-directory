package operations

type PostCompleteMigrationActionEnum string

const (
	PostCompleteMigrationActionEnumCompleteMigration PostCompleteMigrationActionEnum = "CompleteMigration"
)

type PostCompleteMigrationVersionEnum string

const (
	PostCompleteMigrationVersionEnumTwoThousandAndFifteen0202 PostCompleteMigrationVersionEnum = "2015-02-02"
)

type PostCompleteMigrationQueryParams struct {
	Action  PostCompleteMigrationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCompleteMigrationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCompleteMigrationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCompleteMigrationRequest struct {
	QueryParams PostCompleteMigrationQueryParams
	Headers     PostCompleteMigrationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCompleteMigrationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
