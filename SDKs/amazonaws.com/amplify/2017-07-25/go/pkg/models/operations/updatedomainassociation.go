package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainAssociationPathParams struct {
	AppID      string `pathParam:"style=simple,explode=false,name=appId"`
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type UpdateDomainAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDomainAssociationRequestBody struct {
	AutoSubDomainCreationPatterns []string                  `json:"autoSubDomainCreationPatterns"`
	AutoSubDomainIamRole          *string                   `json:"autoSubDomainIAMRole"`
	EnableAutoSubDomain           *bool                     `json:"enableAutoSubDomain"`
	SubDomainSettings             []shared.SubDomainSetting `json:"subDomainSettings"`
}

type UpdateDomainAssociationRequest struct {
	PathParams UpdateDomainAssociationPathParams
	Headers    UpdateDomainAssociationHeaders
	Request    UpdateDomainAssociationRequestBody `request:"mediaType=application/json"`
}

type UpdateDomainAssociationResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
	UpdateDomainAssociationResult    *shared.UpdateDomainAssociationResult
}
