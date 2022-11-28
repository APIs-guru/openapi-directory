package shared

// Identity
// <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
type Identity struct {
	Group   *GroupIdentity   `json:"group,omitempty"`
	IamRole *IamRoleIdentity `json:"iamRole,omitempty"`
	IamUser *IamUserIdentity `json:"iamUser,omitempty"`
	User    *UserIdentity    `json:"user,omitempty"`
}
