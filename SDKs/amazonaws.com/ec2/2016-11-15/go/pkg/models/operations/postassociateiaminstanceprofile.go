package operations

type PostAssociateIamInstanceProfileActionEnum string

const (
	PostAssociateIamInstanceProfileActionEnumAssociateIamInstanceProfile PostAssociateIamInstanceProfileActionEnum = "AssociateIamInstanceProfile"
)

type PostAssociateIamInstanceProfileVersionEnum string

const (
	PostAssociateIamInstanceProfileVersionEnumTwoThousandAndSixteen1115 PostAssociateIamInstanceProfileVersionEnum = "2016-11-15"
)

type PostAssociateIamInstanceProfileQueryParams struct {
	Action  PostAssociateIamInstanceProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateIamInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateIamInstanceProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateIamInstanceProfileRequest struct {
	QueryParams PostAssociateIamInstanceProfileQueryParams
	Headers     PostAssociateIamInstanceProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateIamInstanceProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
