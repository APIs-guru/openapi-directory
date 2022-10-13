package shared

type NetworkOriginConfiguration struct {
	InternetConfiguration map[string]interface{} `json:"internetConfiguration"`
	VpcConfiguration      *VpcConfiguration      `json:"vpcConfiguration"`
}
