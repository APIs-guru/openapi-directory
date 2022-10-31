package operations



type VouchersDeletePathParams struct {
    VoucherCode string `pathParam:"style=simple,explode=false,name=VoucherCode"`
    
}

type VouchersDeleteRequest struct {
    PathParams VouchersDeletePathParams 
    
}

type VouchersDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

