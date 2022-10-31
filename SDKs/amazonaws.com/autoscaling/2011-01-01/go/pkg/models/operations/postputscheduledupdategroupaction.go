package operations

type PostPutScheduledUpdateGroupActionActionEnum string

const (
	PostPutScheduledUpdateGroupActionActionEnumPutScheduledUpdateGroupAction PostPutScheduledUpdateGroupActionActionEnum = "PutScheduledUpdateGroupAction"
)

type PostPutScheduledUpdateGroupActionVersionEnum string

const (
	PostPutScheduledUpdateGroupActionVersionEnumTwoThousandAndEleven0101 PostPutScheduledUpdateGroupActionVersionEnum = "2011-01-01"
)

type PostPutScheduledUpdateGroupActionQueryParams struct {
	Action  PostPutScheduledUpdateGroupActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutScheduledUpdateGroupActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutScheduledUpdateGroupActionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPutScheduledUpdateGroupActionRequest struct {
	QueryParams PostPutScheduledUpdateGroupActionQueryParams
	Headers     PostPutScheduledUpdateGroupActionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutScheduledUpdateGroupActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
