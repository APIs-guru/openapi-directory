package shared

type ActionTypeSettings struct {
	EntityURLTemplate          *string `json:"entityUrlTemplate"`
	ExecutionURLTemplate       *string `json:"executionUrlTemplate"`
	RevisionURLTemplate        *string `json:"revisionUrlTemplate"`
	ThirdPartyConfigurationURL *string `json:"thirdPartyConfigurationUrl"`
}
