package shared

type APIModelsNotification struct {
	CcAddresses []string `json:"CC_Addresses,omitempty" form:"name=CC_Addresses"`
	IsBodyHTML  bool     `json:"IsBodyHtml" form:"name=IsBodyHtml"`
	MessageBody string   `json:"MessageBody" form:"name=MessageBody"`
	Subject     string   `json:"Subject" form:"name=Subject"`
	ToAddresses []string `json:"To_Addresses" form:"name=To_Addresses"`
}
