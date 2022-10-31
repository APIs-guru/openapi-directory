package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterOnPremisesInstanceXAmzTargetEnum string

const (
	RegisterOnPremisesInstanceXAmzTargetEnumCodeDeploy20141006RegisterOnPremisesInstance RegisterOnPremisesInstanceXAmzTargetEnum = "CodeDeploy_20141006.RegisterOnPremisesInstance"
)

type RegisterOnPremisesInstanceHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterOnPremisesInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
