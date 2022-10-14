package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMountTargetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateMountTargetRequestBody struct {
	FileSystemID   string   `json:"FileSystemId"`
	IPAddress      *string  `json:"IpAddress,omitempty"`
	SecurityGroups []string `json:"SecurityGroups,omitempty"`
	SubnetID       string   `json:"SubnetId"`
}

type CreateMountTargetRequest struct {
	Headers CreateMountTargetHeaders
	Request CreateMountTargetRequestBody `request:"mediaType=application/json"`
}

type CreateMountTargetResponse struct {
	AvailabilityZonesMismatch         *interface{}
	BadRequest                        *interface{}
	ContentType                       string
	FileSystemNotFound                *interface{}
	IncorrectFileSystemLifeCycleState *interface{}
	InternalServerError               *interface{}
	IPAddressInUse                    *interface{}
	MountTargetConflict               *interface{}
	MountTargetDescription            *shared.MountTargetDescription
	NetworkInterfaceLimitExceeded     *interface{}
	NoFreeAddressesInSubnet           *interface{}
	SecurityGroupLimitExceeded        *interface{}
	SecurityGroupNotFound             *interface{}
	StatusCode                        int64
	SubnetNotFound                    *interface{}
	UnsupportedAvailabilityZone       *interface{}
}
