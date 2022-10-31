package shared



type IPPermission struct {
    FromPort int64 `json:"FromPort"`
    IPRange string `json:"IpRange"`
    Protocol IPProtocolEnum `json:"Protocol"`
    ToPort int64 `json:"ToPort"`
    
}

