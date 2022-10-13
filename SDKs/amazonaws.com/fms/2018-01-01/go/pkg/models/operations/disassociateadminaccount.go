package operations

type DisassociateAdminAccountXAmzTargetEnum string

const (
	DisassociateAdminAccountXAmzTargetEnumAwsfms20180101DisassociateAdminAccount DisassociateAdminAccountXAmzTargetEnum = "AWSFMS_20180101.DisassociateAdminAccount"
)

type DisassociateAdminAccountHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateAdminAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateAdminAccountRequest struct {
	Headers DisassociateAdminAccountHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DisassociateAdminAccountResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
