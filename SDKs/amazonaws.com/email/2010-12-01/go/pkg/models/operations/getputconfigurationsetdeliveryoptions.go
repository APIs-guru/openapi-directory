package operations

import (
	"openapi/pkg/models/shared"
)

type GetPutConfigurationSetDeliveryOptionsActionEnum string

const (
	GetPutConfigurationSetDeliveryOptionsActionEnumPutConfigurationSetDeliveryOptions GetPutConfigurationSetDeliveryOptionsActionEnum = "PutConfigurationSetDeliveryOptions"
)

// GetPutConfigurationSetDeliveryOptionsDeliveryOptions
// Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
type GetPutConfigurationSetDeliveryOptionsDeliveryOptions struct {
	TLSPolicy *shared.TLSPolicyEnum `queryParam:"name=TlsPolicy"`
}

type GetPutConfigurationSetDeliveryOptionsVersionEnum string

const (
	GetPutConfigurationSetDeliveryOptionsVersionEnumTwoThousandAndTen1201 GetPutConfigurationSetDeliveryOptionsVersionEnum = "2010-12-01"
)

type GetPutConfigurationSetDeliveryOptionsQueryParams struct {
	Action               GetPutConfigurationSetDeliveryOptionsActionEnum       `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSetName string                                                `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	DeliveryOptions      *GetPutConfigurationSetDeliveryOptionsDeliveryOptions `queryParam:"style=form,explode=true,name=DeliveryOptions"`
	Version              GetPutConfigurationSetDeliveryOptionsVersionEnum      `queryParam:"style=form,explode=true,name=Version"`
}

type GetPutConfigurationSetDeliveryOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetPutConfigurationSetDeliveryOptionsRequest struct {
	QueryParams GetPutConfigurationSetDeliveryOptionsQueryParams
	Headers     GetPutConfigurationSetDeliveryOptionsHeaders
}

type GetPutConfigurationSetDeliveryOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
