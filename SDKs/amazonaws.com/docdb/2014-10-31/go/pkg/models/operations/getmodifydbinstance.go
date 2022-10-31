package operations




type GetModifyDbInstanceActionEnum string

const (
    GetModifyDbInstanceActionEnumModifyDbInstance GetModifyDbInstanceActionEnum = "ModifyDBInstance"
)



type GetModifyDbInstanceVersionEnum string

const (
    GetModifyDbInstanceVersionEnumTwoThousandAndFourteen1031 GetModifyDbInstanceVersionEnum = "2014-10-31"
)


type GetModifyDbInstanceQueryParams struct {
    Action GetModifyDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplyImmediately *bool `queryParam:"style=form,explode=true,name=ApplyImmediately"`
    AutoMinorVersionUpgrade *bool `queryParam:"style=form,explode=true,name=AutoMinorVersionUpgrade"`
    CaCertificateIdentifier *string `queryParam:"style=form,explode=true,name=CACertificateIdentifier"`
    DbInstanceClass *string `queryParam:"style=form,explode=true,name=DBInstanceClass"`
    DbInstanceIdentifier string `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
    NewDbInstanceIdentifier *string `queryParam:"style=form,explode=true,name=NewDBInstanceIdentifier"`
    PreferredMaintenanceWindow *string `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
    PromotionTier *int64 `queryParam:"style=form,explode=true,name=PromotionTier"`
    Version GetModifyDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyDbInstanceRequest struct {
    QueryParams GetModifyDbInstanceQueryParams 
    Headers GetModifyDbInstanceHeaders 
    
}

type GetModifyDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

