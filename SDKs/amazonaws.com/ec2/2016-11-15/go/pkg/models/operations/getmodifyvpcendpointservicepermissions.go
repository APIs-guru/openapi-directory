package operations




type GetModifyVpcEndpointServicePermissionsActionEnum string

const (
    GetModifyVpcEndpointServicePermissionsActionEnumModifyVpcEndpointServicePermissions GetModifyVpcEndpointServicePermissionsActionEnum = "ModifyVpcEndpointServicePermissions"
)



type GetModifyVpcEndpointServicePermissionsVersionEnum string

const (
    GetModifyVpcEndpointServicePermissionsVersionEnumTwoThousandAndSixteen1115 GetModifyVpcEndpointServicePermissionsVersionEnum = "2016-11-15"
)


type GetModifyVpcEndpointServicePermissionsQueryParams struct {
    Action GetModifyVpcEndpointServicePermissionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AddAllowedPrincipals []string `queryParam:"style=form,explode=true,name=AddAllowedPrincipals"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    RemoveAllowedPrincipals []string `queryParam:"style=form,explode=true,name=RemoveAllowedPrincipals"`
    ServiceID string `queryParam:"style=form,explode=true,name=ServiceId"`
    Version GetModifyVpcEndpointServicePermissionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyVpcEndpointServicePermissionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyVpcEndpointServicePermissionsRequest struct {
    QueryParams GetModifyVpcEndpointServicePermissionsQueryParams 
    Headers GetModifyVpcEndpointServicePermissionsHeaders 
    
}

type GetModifyVpcEndpointServicePermissionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

