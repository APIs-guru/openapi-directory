package shared

import (
"time")

type AuthorizationCodesSharedModelsAuthorizationContactInformation struct {
    AuthorizationCodeID int32 `json:"AuthorizationCodeID" form:"name=AuthorizationCodeID"`
    Code *string `json:"Code,omitempty" form:"name=Code"`
    Contact string `json:"Contact" form:"name=Contact"`
    CreatedBy *string `json:"CreatedBy,omitempty" form:"name=CreatedBy"`
    CreatedDate *time.Time `json:"CreatedDate,omitempty" form:"name=CreatedDate"`
    DealerCode string `json:"DealerCode" form:"name=DealerCode"`
    Dealership string `json:"Dealership" form:"name=Dealership"`
    DefinitionName *string `json:"DefinitionName,omitempty" form:"name=DefinitionName"`
    Email *string `json:"Email,omitempty" form:"name=Email"`
    ID *int32 `json:"ID,omitempty" form:"name=ID"`
    Notes *string `json:"Notes,omitempty" form:"name=Notes"`
    Phone string `json:"Phone" form:"name=Phone"`
    
}

