package operations

import (
	"openapi/pkg/models/shared"
)

type ReloadTablesXAmzTargetEnum string

const (
	ReloadTablesXAmzTargetEnumAmazonDmSv20160101ReloadTables ReloadTablesXAmzTargetEnum = "AmazonDMSv20160101.ReloadTables"
)

type ReloadTablesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ReloadTablesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ReloadTablesRequest struct {
	Headers ReloadTablesHeaders
	Request shared.ReloadTablesMessage `request:"mediaType=application/json"`
}

type ReloadTablesResponse struct {
	ContentType               string
	InvalidResourceStateFault *interface{}
	ReloadTablesResponse      *shared.ReloadTablesResponse
	ResourceNotFoundFault     *interface{}
	StatusCode                int64
}
