package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccessPointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAccessPointRequestBodyPosixUser struct {
	Gid           *int64  `json:"Gid"`
	SecondaryGids []int64 `json:"SecondaryGids"`
	UID           *int64  `json:"Uid"`
}

type CreateAccessPointRequestBodyRootDirectory struct {
	CreationInfo *shared.CreationInfo `json:"CreationInfo"`
	Path         *string              `json:"Path"`
}

type CreateAccessPointRequestBody struct {
	ClientToken   string                                     `json:"ClientToken"`
	FileSystemID  string                                     `json:"FileSystemId"`
	PosixUser     *CreateAccessPointRequestBodyPosixUser     `json:"PosixUser"`
	RootDirectory *CreateAccessPointRequestBodyRootDirectory `json:"RootDirectory"`
	Tags          []shared.Tag                               `json:"Tags"`
}

type CreateAccessPointRequest struct {
	Headers CreateAccessPointHeaders
	Request CreateAccessPointRequestBody `request:"mediaType=application/json"`
}

type CreateAccessPointResponse struct {
	AccessPointAlreadyExists          *interface{}
	AccessPointDescription            *shared.AccessPointDescription
	AccessPointLimitExceeded          *interface{}
	BadRequest                        *interface{}
	ContentType                       string
	FileSystemNotFound                *interface{}
	IncorrectFileSystemLifeCycleState *interface{}
	InternalServerError               *interface{}
	StatusCode                        int64
}
