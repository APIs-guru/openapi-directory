package operations

type ModifyMountTargetSecurityGroupsPathParams struct {
	MountTargetID string `pathParam:"style=simple,explode=false,name=MountTargetId"`
}

type ModifyMountTargetSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ModifyMountTargetSecurityGroupsRequestBody struct {
	SecurityGroups []string `json:"SecurityGroups,omitempty"`
}

type ModifyMountTargetSecurityGroupsRequest struct {
	PathParams ModifyMountTargetSecurityGroupsPathParams
	Headers    ModifyMountTargetSecurityGroupsHeaders
	Request    ModifyMountTargetSecurityGroupsRequestBody `request:"mediaType=application/json"`
}

type ModifyMountTargetSecurityGroupsResponse struct {
	BadRequest                 *interface{}
	ContentType                string
	IncorrectMountTargetState  *interface{}
	InternalServerError        *interface{}
	MountTargetNotFound        *interface{}
	SecurityGroupLimitExceeded *interface{}
	SecurityGroupNotFound      *interface{}
	StatusCode                 int64
}
