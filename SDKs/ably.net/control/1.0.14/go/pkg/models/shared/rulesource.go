package shared




type RuleSourceTypeEnum string

const (
    RuleSourceTypeEnumChannelMessage RuleSourceTypeEnum = "channel.message"
RuleSourceTypeEnumChannelPresence RuleSourceTypeEnum = "channel.presence"
RuleSourceTypeEnumChannelLifecycle RuleSourceTypeEnum = "channel.lifecycle"
RuleSourceTypeEnumChannelOccupancy RuleSourceTypeEnum = "channel.occupancy"
)


type RuleSource struct {
    ChannelFilter string `json:"channelFilter"`
    Type RuleSourceTypeEnum `json:"type"`
    
}

