package shared

type NetworkProfile struct {
	Arn                   *string                 `json:"arn"`
	Description           *string                 `json:"description"`
	DownlinkBandwidthBits *int64                  `json:"downlinkBandwidthBits"`
	DownlinkDelayMs       *int64                  `json:"downlinkDelayMs"`
	DownlinkJitterMs      *int64                  `json:"downlinkJitterMs"`
	DownlinkLossPercent   *int64                  `json:"downlinkLossPercent"`
	Name                  *string                 `json:"name"`
	Type                  *NetworkProfileTypeEnum `json:"type"`
	UplinkBandwidthBits   *int64                  `json:"uplinkBandwidthBits"`
	UplinkDelayMs         *int64                  `json:"uplinkDelayMs"`
	UplinkJitterMs        *int64                  `json:"uplinkJitterMs"`
	UplinkLossPercent     *int64                  `json:"uplinkLossPercent"`
}
