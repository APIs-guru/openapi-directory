package operations

type GetListIdentitiesActionEnum string

const (
	GetListIdentitiesActionEnumListIdentities GetListIdentitiesActionEnum = "ListIdentities"
)

type GetListIdentitiesIdentityTypeEnum string

const (
	GetListIdentitiesIdentityTypeEnumEmailAddress GetListIdentitiesIdentityTypeEnum = "EmailAddress"
	GetListIdentitiesIdentityTypeEnumDomain       GetListIdentitiesIdentityTypeEnum = "Domain"
)

type GetListIdentitiesVersionEnum string

const (
	GetListIdentitiesVersionEnumTwoThousandAndTen1201 GetListIdentitiesVersionEnum = "2010-12-01"
)

type GetListIdentitiesQueryParams struct {
	Action       GetListIdentitiesActionEnum        `queryParam:"style=form,explode=true,name=Action"`
	IdentityType *GetListIdentitiesIdentityTypeEnum `queryParam:"style=form,explode=true,name=IdentityType"`
	MaxItems     *int64                             `queryParam:"style=form,explode=true,name=MaxItems"`
	NextToken    *string                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version      GetListIdentitiesVersionEnum       `queryParam:"style=form,explode=true,name=Version"`
}

type GetListIdentitiesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListIdentitiesRequest struct {
	QueryParams GetListIdentitiesQueryParams
	Headers     GetListIdentitiesHeaders
}

type GetListIdentitiesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
