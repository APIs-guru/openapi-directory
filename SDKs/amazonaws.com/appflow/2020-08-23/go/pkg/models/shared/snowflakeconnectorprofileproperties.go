package shared

type SnowflakeConnectorProfileProperties struct {
	AccountName            *string `json:"accountName,omitempty"`
	BucketName             string  `json:"bucketName"`
	BucketPrefix           *string `json:"bucketPrefix,omitempty"`
	PrivateLinkServiceName *string `json:"privateLinkServiceName,omitempty"`
	Region                 *string `json:"region,omitempty"`
	Stage                  string  `json:"stage"`
	Warehouse              string  `json:"warehouse"`
}
