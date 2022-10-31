package operations

import (
"openapi/pkg/models/shared")

type ListCertificateAuthoritiesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListCertificateAuthoritiesXAmzTargetEnum string

const (
    ListCertificateAuthoritiesXAmzTargetEnumAcmPrivateCaListCertificateAuthorities ListCertificateAuthoritiesXAmzTargetEnum = "ACMPrivateCA.ListCertificateAuthorities"
)


type ListCertificateAuthoritiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListCertificateAuthoritiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListCertificateAuthoritiesRequest struct {
    QueryParams ListCertificateAuthoritiesQueryParams 
    Headers ListCertificateAuthoritiesHeaders 
    Request shared.ListCertificateAuthoritiesRequest `request:"mediaType=application/json"`
    
}

type ListCertificateAuthoritiesResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    ListCertificateAuthoritiesResponse *shared.ListCertificateAuthoritiesResponse 
    StatusCode int64 
    
}

