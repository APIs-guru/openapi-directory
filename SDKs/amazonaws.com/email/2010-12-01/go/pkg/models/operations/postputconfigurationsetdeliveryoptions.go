package operations

type PostPutConfigurationSetDeliveryOptionsActionEnum string

const (
	PostPutConfigurationSetDeliveryOptionsActionEnumPutConfigurationSetDeliveryOptions PostPutConfigurationSetDeliveryOptionsActionEnum = "PutConfigurationSetDeliveryOptions"
)

type PostPutConfigurationSetDeliveryOptionsVersionEnum string

const (
	PostPutConfigurationSetDeliveryOptionsVersionEnumTwoThousandAndTen1201 PostPutConfigurationSetDeliveryOptionsVersionEnum = "2010-12-01"
)

type PostPutConfigurationSetDeliveryOptionsQueryParams struct {
	Action  PostPutConfigurationSetDeliveryOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutConfigurationSetDeliveryOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutConfigurationSetDeliveryOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPutConfigurationSetDeliveryOptionsRequest struct {
	QueryParams PostPutConfigurationSetDeliveryOptionsQueryParams
	Headers     PostPutConfigurationSetDeliveryOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutConfigurationSetDeliveryOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
