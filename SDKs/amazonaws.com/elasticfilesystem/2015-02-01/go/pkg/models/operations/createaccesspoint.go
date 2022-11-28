package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccessPointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateAccessPointRequestBodyPosixUser
// The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
type CreateAccessPointRequestBodyPosixUser struct {
	Gid           *int64  `json:"Gid,omitempty"`
	SecondaryGids []int64 `json:"SecondaryGids,omitempty"`
	UID           *int64  `json:"Uid,omitempty"`
}

// CreateAccessPointRequestBodyRootDirectory
// Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
type CreateAccessPointRequestBodyRootDirectory struct {
	CreationInfo *shared.CreationInfo `json:"CreationInfo,omitempty"`
	Path         *string              `json:"Path,omitempty"`
}

type CreateAccessPointRequestBody struct {
	ClientToken   string                                     `json:"ClientToken"`
	FileSystemID  string                                     `json:"FileSystemId"`
	PosixUser     *CreateAccessPointRequestBodyPosixUser     `json:"PosixUser,omitempty"`
	RootDirectory *CreateAccessPointRequestBodyRootDirectory `json:"RootDirectory,omitempty"`
	Tags          []shared.Tag                               `json:"Tags,omitempty"`
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
