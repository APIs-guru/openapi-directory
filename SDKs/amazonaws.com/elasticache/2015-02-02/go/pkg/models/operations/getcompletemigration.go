package operations

type GetCompleteMigrationActionEnum string

const (
	GetCompleteMigrationActionEnumCompleteMigration GetCompleteMigrationActionEnum = "CompleteMigration"
)

type GetCompleteMigrationVersionEnum string

const (
	GetCompleteMigrationVersionEnumTwoThousandAndFifteen0202 GetCompleteMigrationVersionEnum = "2015-02-02"
)

type GetCompleteMigrationQueryParams struct {
	Action             GetCompleteMigrationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Force              *bool                           `queryParam:"style=form,explode=true,name=Force"`
	ReplicationGroupID string                          `queryParam:"style=form,explode=true,name=ReplicationGroupId"`
	Version            GetCompleteMigrationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCompleteMigrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCompleteMigrationRequest struct {
	QueryParams GetCompleteMigrationQueryParams
	Headers     GetCompleteMigrationHeaders
}

type GetCompleteMigrationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
