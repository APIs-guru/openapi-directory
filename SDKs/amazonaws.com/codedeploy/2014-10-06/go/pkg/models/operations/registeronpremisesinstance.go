package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterOnPremisesInstanceXAmzTargetEnum string

const (
	RegisterOnPremisesInstanceXAmzTargetEnumCodeDeploy20141006RegisterOnPremisesInstance RegisterOnPremisesInstanceXAmzTargetEnum = "CodeDeploy_20141006.RegisterOnPremisesInstance"
)

type RegisterOnPremisesInstanceHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterOnPremisesInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterOnPremisesInstanceRequest struct {
	Headers RegisterOnPremisesInstanceHeaders
	Request shared.RegisterOnPremisesInstanceInput `request:"mediaType=application/json"`
}

type RegisterOnPremisesInstanceResponse struct {
	ContentType                             string
	IamArnRequiredException                 *interface{}
	IamSessionArnAlreadyRegisteredException *interface{}
	IamUserArnAlreadyRegisteredException    *interface{}
	IamUserArnRequiredException             *interface{}
	InstanceNameAlreadyRegisteredException  *interface{}
	InstanceNameRequiredException           *interface{}
	InvalidIamSessionArnException           *interface{}
	InvalidIamUserArnException              *interface{}
	InvalidInstanceNameException            *interface{}
	MultipleIamArnsProvidedException        *interface{}
	StatusCode                              int64
}
