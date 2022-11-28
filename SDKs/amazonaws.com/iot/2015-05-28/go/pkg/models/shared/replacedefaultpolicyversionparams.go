package shared

// ReplaceDefaultPolicyVersionParams
// Parameters to define a mitigation action that adds a blank policy to restrict permissions.
type ReplaceDefaultPolicyVersionParams struct {
	TemplateName PolicyTemplateNameEnum `json:"templateName"`
}
