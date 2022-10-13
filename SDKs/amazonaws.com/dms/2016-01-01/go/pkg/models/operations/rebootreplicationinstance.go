package operations

import (
	"openapi/pkg/models/shared"
)

type RebootReplicationInstanceXAmzTargetEnum string

const (
	RebootReplicationInstanceXAmzTargetEnumAmazonDmSv20160101RebootReplicationInstance RebootReplicationInstanceXAmzTargetEnum = "AmazonDMSv20160101.RebootReplicationInstance"
)

type RebootReplicationInstanceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RebootReplicationInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RebootReplicationInstanceRequest struct {
	Headers RebootReplicationInstanceHeaders
	Request shared.RebootReplicationInstanceMessage `request:"mediaType=application/json"`
}

type RebootReplicationInstanceResponse struct {
	ContentType                       string
	InvalidResourceStateFault         *interface{}
	RebootReplicationInstanceResponse *shared.RebootReplicationInstanceResponse
	ResourceNotFoundFault             *interface{}
	StatusCode                        int64
}
