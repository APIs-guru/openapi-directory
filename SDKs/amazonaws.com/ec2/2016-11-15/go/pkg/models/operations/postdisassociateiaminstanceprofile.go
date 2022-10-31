package operations

type PostDisassociateIamInstanceProfileActionEnum string

const (
	PostDisassociateIamInstanceProfileActionEnumDisassociateIamInstanceProfile PostDisassociateIamInstanceProfileActionEnum = "DisassociateIamInstanceProfile"
)

type PostDisassociateIamInstanceProfileVersionEnum string

const (
	PostDisassociateIamInstanceProfileVersionEnumTwoThousandAndSixteen1115 PostDisassociateIamInstanceProfileVersionEnum = "2016-11-15"
)

type PostDisassociateIamInstanceProfileQueryParams struct {
	Action  PostDisassociateIamInstanceProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateIamInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateIamInstanceProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDisassociateIamInstanceProfileRequest struct {
	QueryParams PostDisassociateIamInstanceProfileQueryParams
	Headers     PostDisassociateIamInstanceProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateIamInstanceProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
