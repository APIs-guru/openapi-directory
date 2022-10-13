package shared

type AuthorizationCodesSharedModelsCategoryUserReport struct {
	Categories []AuthorizationCodesSharedModelsCategory             `json:"Categories"`
	User       *AuthorizationCodesSharedModelsAuthorizationCodeUser `json:"User"`
}
