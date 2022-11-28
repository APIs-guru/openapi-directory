package shared

// IamRoleIdentity
// Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>IAM User Guide</i>.
type IamRoleIdentity struct {
	Arn string `json:"arn"`
}
