package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyClusterXAmzTargetEnum string

const (
	ModifyClusterXAmzTargetEnumElasticMapReduceModifyCluster ModifyClusterXAmzTargetEnum = "ElasticMapReduce.ModifyCluster"
)

type ModifyClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyClusterRequest struct {
	Headers ModifyClusterHeaders
	Request shared.ModifyClusterInput `request:"mediaType=application/json"`
}

type ModifyClusterResponse struct {
	ContentType             string
	InternalServerError     *interface{}
	InvalidRequestException *interface{}
	ModifyClusterOutput     *shared.ModifyClusterOutput
	StatusCode              int64
}
