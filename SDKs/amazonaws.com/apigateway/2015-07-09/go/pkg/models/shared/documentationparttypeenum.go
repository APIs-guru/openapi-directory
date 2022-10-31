package shared

type DocumentationPartTypeEnum string

const (
	DocumentationPartTypeEnumAPI            DocumentationPartTypeEnum = "API"
	DocumentationPartTypeEnumAuthorizer     DocumentationPartTypeEnum = "AUTHORIZER"
	DocumentationPartTypeEnumModel          DocumentationPartTypeEnum = "MODEL"
	DocumentationPartTypeEnumResource       DocumentationPartTypeEnum = "RESOURCE"
	DocumentationPartTypeEnumMethod         DocumentationPartTypeEnum = "METHOD"
	DocumentationPartTypeEnumPathParameter  DocumentationPartTypeEnum = "PATH_PARAMETER"
	DocumentationPartTypeEnumQueryParameter DocumentationPartTypeEnum = "QUERY_PARAMETER"
	DocumentationPartTypeEnumRequestHeader  DocumentationPartTypeEnum = "REQUEST_HEADER"
	DocumentationPartTypeEnumRequestBody    DocumentationPartTypeEnum = "REQUEST_BODY"
	DocumentationPartTypeEnumResponse       DocumentationPartTypeEnum = "RESPONSE"
	DocumentationPartTypeEnumResponseHeader DocumentationPartTypeEnum = "RESPONSE_HEADER"
	DocumentationPartTypeEnumResponseBody   DocumentationPartTypeEnum = "RESPONSE_BODY"
)
