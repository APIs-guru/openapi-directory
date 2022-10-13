package shared

type SnowflakeConnectorProfileProperties struct {
	AccountName            *string `json:"accountName"`
	BucketName             string  `json:"bucketName"`
	BucketPrefix           *string `json:"bucketPrefix"`
	PrivateLinkServiceName *string `json:"privateLinkServiceName"`
	Region                 *string `json:"region"`
	Stage                  string  `json:"stage"`
	Warehouse              string  `json:"warehouse"`
}
