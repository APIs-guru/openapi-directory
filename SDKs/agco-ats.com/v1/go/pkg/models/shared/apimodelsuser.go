package shared

type APIModelsUser struct {
	ChangePassword *string `json:"ChangePassword" form:"name=ChangePassword"`
	Email          *string `json:"Email" form:"name=Email"`
	Name           *string `json:"Name" form:"name=Name"`
	Password       *string `json:"Password" form:"name=Password"`
	UserID         *int32  `json:"UserID" form:"name=UserID"`
	Username       *string `json:"Username" form:"name=Username"`
}
