package operations

type RejectCertificateTransferPathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type RejectCertificateTransferHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RejectCertificateTransferRequestBody struct {
	RejectReason *string `json:"rejectReason,omitempty"`
}

type RejectCertificateTransferRequest struct {
	PathParams RejectCertificateTransferPathParams
	Headers    RejectCertificateTransferHeaders
	Request    RejectCertificateTransferRequestBody `request:"mediaType=application/json"`
}

type RejectCertificateTransferResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ResourceNotFoundException         *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	TransferAlreadyCompletedException *interface{}
	UnauthorizedException             *interface{}
}
