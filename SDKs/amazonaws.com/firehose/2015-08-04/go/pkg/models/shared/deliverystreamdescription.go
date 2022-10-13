package shared

import (
	"time"
)

type DeliveryStreamDescription struct {
	CreateTimestamp                       *time.Time                             `json:"CreateTimestamp"`
	DeliveryStreamArn                     string                                 `json:"DeliveryStreamARN"`
	DeliveryStreamEncryptionConfiguration *DeliveryStreamEncryptionConfiguration `json:"DeliveryStreamEncryptionConfiguration"`
	DeliveryStreamName                    string                                 `json:"DeliveryStreamName"`
	DeliveryStreamStatus                  DeliveryStreamStatusEnum               `json:"DeliveryStreamStatus"`
	DeliveryStreamType                    DeliveryStreamTypeEnum                 `json:"DeliveryStreamType"`
	Destinations                          []DestinationDescription               `json:"Destinations"`
	FailureDescription                    *FailureDescription                    `json:"FailureDescription"`
	HasMoreDestinations                   bool                                   `json:"HasMoreDestinations"`
	LastUpdateTimestamp                   *time.Time                             `json:"LastUpdateTimestamp"`
	Source                                *SourceDescription                     `json:"Source"`
	VersionID                             string                                 `json:"VersionId"`
}
