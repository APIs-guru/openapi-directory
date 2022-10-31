package operations




type GetCreateServiceLinkedRoleActionEnum string

const (
    GetCreateServiceLinkedRoleActionEnumCreateServiceLinkedRole GetCreateServiceLinkedRoleActionEnum = "CreateServiceLinkedRole"
)



type GetCreateServiceLinkedRoleVersionEnum string

const (
    GetCreateServiceLinkedRoleVersionEnumTwoThousandAndTen0508 GetCreateServiceLinkedRoleVersionEnum = "2010-05-08"
)


type GetCreateServiceLinkedRoleQueryParams struct {
    AwsServiceName string `queryParam:"style=form,explode=true,name=AWSServiceName"`
    Action GetCreateServiceLinkedRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CustomSuffix *string `queryParam:"style=form,explode=true,name=CustomSuffix"`
    Description *string `queryParam:"style=form,explode=true,name=Description"`
    Version GetCreateServiceLinkedRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateServiceLinkedRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateServiceLinkedRoleRequest struct {
    QueryParams GetCreateServiceLinkedRoleQueryParams 
    Headers GetCreateServiceLinkedRoleHeaders 
    
}

type GetCreateServiceLinkedRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

