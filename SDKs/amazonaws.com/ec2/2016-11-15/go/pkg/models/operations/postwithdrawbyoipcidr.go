package operations

type PostWithdrawByoipCidrActionEnum string

const (
	PostWithdrawByoipCidrActionEnumWithdrawByoipCidr PostWithdrawByoipCidrActionEnum = "WithdrawByoipCidr"
)

type PostWithdrawByoipCidrVersionEnum string

const (
	PostWithdrawByoipCidrVersionEnumTwoThousandAndSixteen1115 PostWithdrawByoipCidrVersionEnum = "2016-11-15"
)

type PostWithdrawByoipCidrQueryParams struct {
	Action  PostWithdrawByoipCidrActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostWithdrawByoipCidrVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostWithdrawByoipCidrHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostWithdrawByoipCidrRequest struct {
	QueryParams PostWithdrawByoipCidrQueryParams
	Headers     PostWithdrawByoipCidrHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostWithdrawByoipCidrResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
