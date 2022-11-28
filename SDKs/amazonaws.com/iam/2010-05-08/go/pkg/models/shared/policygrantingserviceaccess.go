package shared

// PolicyGrantingServiceAccess
// <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
type PolicyGrantingServiceAccess struct {
	EntityName *string
	EntityType *PolicyOwnerEntityTypeEnum
	PolicyArn  *string
	PolicyName string
	PolicyType PolicyTypeEnum
}
