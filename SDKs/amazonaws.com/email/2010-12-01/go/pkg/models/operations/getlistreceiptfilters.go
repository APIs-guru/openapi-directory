package operations




type GetListReceiptFiltersActionEnum string

const (
    GetListReceiptFiltersActionEnumListReceiptFilters GetListReceiptFiltersActionEnum = "ListReceiptFilters"
)



type GetListReceiptFiltersVersionEnum string

const (
    GetListReceiptFiltersVersionEnumTwoThousandAndTen1201 GetListReceiptFiltersVersionEnum = "2010-12-01"
)


type GetListReceiptFiltersQueryParams struct {
    Action GetListReceiptFiltersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetListReceiptFiltersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListReceiptFiltersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListReceiptFiltersRequest struct {
    QueryParams GetListReceiptFiltersQueryParams 
    Headers GetListReceiptFiltersHeaders 
    
}

type GetListReceiptFiltersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

