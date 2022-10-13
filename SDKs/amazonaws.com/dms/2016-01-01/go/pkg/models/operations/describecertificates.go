package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCertificatesQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeCertificatesXAmzTargetEnum string

const (
	DescribeCertificatesXAmzTargetEnumAmazonDmSv20160101DescribeCertificates DescribeCertificatesXAmzTargetEnum = "AmazonDMSv20160101.DescribeCertificates"
)

type DescribeCertificatesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCertificatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCertificatesRequest struct {
	QueryParams DescribeCertificatesQueryParams
	Headers     DescribeCertificatesHeaders
	Request     shared.DescribeCertificatesMessage `request:"mediaType=application/json"`
}

type DescribeCertificatesResponse struct {
	ContentType                  string
	DescribeCertificatesResponse *shared.DescribeCertificatesResponse
	ResourceNotFoundFault        *interface{}
	StatusCode                   int64
}
