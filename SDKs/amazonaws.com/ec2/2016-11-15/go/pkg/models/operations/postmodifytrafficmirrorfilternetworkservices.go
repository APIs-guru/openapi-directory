package operations




type PostModifyTrafficMirrorFilterNetworkServicesActionEnum string

const (
    PostModifyTrafficMirrorFilterNetworkServicesActionEnumModifyTrafficMirrorFilterNetworkServices PostModifyTrafficMirrorFilterNetworkServicesActionEnum = "ModifyTrafficMirrorFilterNetworkServices"
)



type PostModifyTrafficMirrorFilterNetworkServicesVersionEnum string

const (
    PostModifyTrafficMirrorFilterNetworkServicesVersionEnumTwoThousandAndSixteen1115 PostModifyTrafficMirrorFilterNetworkServicesVersionEnum = "2016-11-15"
)


type PostModifyTrafficMirrorFilterNetworkServicesQueryParams struct {
    Action PostModifyTrafficMirrorFilterNetworkServicesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyTrafficMirrorFilterNetworkServicesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyTrafficMirrorFilterNetworkServicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyTrafficMirrorFilterNetworkServicesRequest struct {
    QueryParams PostModifyTrafficMirrorFilterNetworkServicesQueryParams 
    Headers PostModifyTrafficMirrorFilterNetworkServicesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyTrafficMirrorFilterNetworkServicesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

