package shared

import (
	"time"
)

type AuthorizationCodesSharedModelsAuthorizationContactInformation struct {
	AuthorizationCodeID int32      `json:"AuthorizationCodeID" form:"name=AuthorizationCodeID"`
	Code                *string    `json:"Code" form:"name=Code"`
	Contact             string     `json:"Contact" form:"name=Contact"`
	CreatedBy           *string    `json:"CreatedBy" form:"name=CreatedBy"`
	CreatedDate         *time.Time `json:"CreatedDate" form:"name=CreatedDate"`
	DealerCode          string     `json:"DealerCode" form:"name=DealerCode"`
	Dealership          string     `json:"Dealership" form:"name=Dealership"`
	DefinitionName      *string    `json:"DefinitionName" form:"name=DefinitionName"`
	Email               *string    `json:"Email" form:"name=Email"`
	ID                  *int32     `json:"ID" form:"name=ID"`
	Notes               *string    `json:"Notes" form:"name=Notes"`
	Phone               string     `json:"Phone" form:"name=Phone"`
}
