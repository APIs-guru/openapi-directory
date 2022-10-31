package shared

import (
"time")

type DeliveryStreamDescription struct {
    CreateTimestamp *time.Time `json:"CreateTimestamp,omitempty"`
    DeliveryStreamArn string `json:"DeliveryStreamARN"`
    DeliveryStreamEncryptionConfiguration *DeliveryStreamEncryptionConfiguration `json:"DeliveryStreamEncryptionConfiguration,omitempty"`
    DeliveryStreamName string `json:"DeliveryStreamName"`
    DeliveryStreamStatus DeliveryStreamStatusEnum `json:"DeliveryStreamStatus"`
    DeliveryStreamType DeliveryStreamTypeEnum `json:"DeliveryStreamType"`
    Destinations []DestinationDescription `json:"Destinations"`
    FailureDescription *FailureDescription `json:"FailureDescription,omitempty"`
    HasMoreDestinations bool `json:"HasMoreDestinations"`
    LastUpdateTimestamp *time.Time `json:"LastUpdateTimestamp,omitempty"`
    Source *SourceDescription `json:"Source,omitempty"`
    VersionID string `json:"VersionId"`
    
}

