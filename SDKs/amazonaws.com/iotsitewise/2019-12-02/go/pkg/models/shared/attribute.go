package shared

// Attribute
// Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.
type Attribute struct {
	DefaultValue *string `json:"defaultValue,omitempty"`
}
