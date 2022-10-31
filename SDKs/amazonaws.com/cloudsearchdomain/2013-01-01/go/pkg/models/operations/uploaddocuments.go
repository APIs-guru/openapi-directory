package operations

import (
"openapi/pkg/models/shared")


type UploadDocumentsFormatEnum string

const (
    UploadDocumentsFormatEnumSdk UploadDocumentsFormatEnum = "sdk"
)


type UploadDocumentsQueryParams struct {
    Format UploadDocumentsFormatEnum `queryParam:"style=form,explode=true,name=format"`
    
}


type UploadDocumentsContentTypeEnum string

const (
    UploadDocumentsContentTypeEnumApplicationJSON UploadDocumentsContentTypeEnum = "application/json"
UploadDocumentsContentTypeEnumApplicationXML UploadDocumentsContentTypeEnum = "application/xml"
)


type UploadDocumentsHeaders struct {
    ContentType UploadDocumentsContentTypeEnum `header:"style=simple,explode=false,name=Content-Type"`
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UploadDocumentsRequestBody struct {
    Documents string `json:"documents"`
    
}

type UploadDocumentsRequest struct {
    QueryParams UploadDocumentsQueryParams 
    Headers UploadDocumentsHeaders 
    Request UploadDocumentsRequestBody `request:"mediaType=application/json"`
    
}

type UploadDocumentsResponse struct {
    ContentType string 
    DocumentServiceException *shared.DocumentServiceException 
    StatusCode int64 
    UploadDocumentsResponse *shared.UploadDocumentsResponse 
    
}

