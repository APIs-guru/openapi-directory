package shared




type OperatorNormalizationOptionEnum string

const (
    OperatorNormalizationOptionEnumBasic OperatorNormalizationOptionEnum = "basic"
)


type OperatorNormalization struct {
    Option *OperatorNormalizationOptionEnum `json:"option,omitempty"`
    
}

