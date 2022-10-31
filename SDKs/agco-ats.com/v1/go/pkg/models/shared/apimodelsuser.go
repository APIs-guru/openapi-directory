package shared

type APIModelsUser struct {
	ChangePassword *string `json:"ChangePassword,omitempty" form:"name=ChangePassword"`
	Email          *string `json:"Email,omitempty" form:"name=Email"`
	Name           *string `json:"Name,omitempty" form:"name=Name"`
	Password       *string `json:"Password,omitempty" form:"name=Password"`
	UserID         *int32  `json:"UserID,omitempty" form:"name=UserID"`
	Username       *string `json:"Username,omitempty" form:"name=Username"`
}
