package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLagsXAmzTargetEnum string

const (
	DescribeLagsXAmzTargetEnumOvertureServiceDescribeLags DescribeLagsXAmzTargetEnum = "OvertureService.DescribeLags"
)

type DescribeLagsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLagsRequest struct {
	Headers DescribeLagsHeaders
	Request shared.DescribeLagsRequest `request:"mediaType=application/json"`
}

type DescribeLagsResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	Lags                         *shared.Lags
	StatusCode                   int64
}
