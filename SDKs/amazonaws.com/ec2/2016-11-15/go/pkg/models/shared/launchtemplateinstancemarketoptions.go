package shared

// LaunchTemplateInstanceMarketOptions
// The market (purchasing) option for the instances.
type LaunchTemplateInstanceMarketOptions struct {
	MarketType  *MarketTypeEnum
	SpotOptions *LaunchTemplateSpotMarketOptions
}
