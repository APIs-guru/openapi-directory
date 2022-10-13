package operations

type PostStartMigrationActionEnum string

const (
	PostStartMigrationActionEnumStartMigration PostStartMigrationActionEnum = "StartMigration"
)

type PostStartMigrationVersionEnum string

const (
	PostStartMigrationVersionEnumTwoThousandAndFifteen0202 PostStartMigrationVersionEnum = "2015-02-02"
)

type PostStartMigrationQueryParams struct {
	Action  PostStartMigrationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartMigrationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartMigrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostStartMigrationRequest struct {
	QueryParams PostStartMigrationQueryParams
	Headers     PostStartMigrationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartMigrationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
