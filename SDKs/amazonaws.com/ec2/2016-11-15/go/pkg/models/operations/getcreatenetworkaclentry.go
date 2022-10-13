package operations

type GetCreateNetworkACLEntryActionEnum string

const (
	GetCreateNetworkACLEntryActionEnumCreateNetworkACLEntry GetCreateNetworkACLEntryActionEnum = "CreateNetworkAclEntry"
)

type GetCreateNetworkACLEntryIcmp struct {
	Code *int64 `queryParam:"name=Code"`
	Type *int64 `queryParam:"name=Type"`
}

type GetCreateNetworkACLEntryPortRange struct {
	From *int64 `queryParam:"name=From"`
	To   *int64 `queryParam:"name=To"`
}

type GetCreateNetworkACLEntryRuleActionEnum string

const (
	GetCreateNetworkACLEntryRuleActionEnumAllow GetCreateNetworkACLEntryRuleActionEnum = "allow"
	GetCreateNetworkACLEntryRuleActionEnumDeny  GetCreateNetworkACLEntryRuleActionEnum = "deny"
)

type GetCreateNetworkACLEntryVersionEnum string

const (
	GetCreateNetworkACLEntryVersionEnumTwoThousandAndSixteen1115 GetCreateNetworkACLEntryVersionEnum = "2016-11-15"
)

type GetCreateNetworkACLEntryQueryParams struct {
	Action        GetCreateNetworkACLEntryActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	CidrBlock     *string                                `queryParam:"style=form,explode=true,name=CidrBlock"`
	DryRun        *bool                                  `queryParam:"style=form,explode=true,name=DryRun"`
	Egress        bool                                   `queryParam:"style=form,explode=true,name=Egress"`
	Icmp          *GetCreateNetworkACLEntryIcmp          `queryParam:"style=form,explode=true,name=Icmp"`
	Ipv6CidrBlock *string                                `queryParam:"style=form,explode=true,name=Ipv6CidrBlock"`
	NetworkACLID  string                                 `queryParam:"style=form,explode=true,name=NetworkAclId"`
	PortRange     *GetCreateNetworkACLEntryPortRange     `queryParam:"style=form,explode=true,name=PortRange"`
	Protocol      string                                 `queryParam:"style=form,explode=true,name=Protocol"`
	RuleAction    GetCreateNetworkACLEntryRuleActionEnum `queryParam:"style=form,explode=true,name=RuleAction"`
	RuleNumber    int64                                  `queryParam:"style=form,explode=true,name=RuleNumber"`
	Version       GetCreateNetworkACLEntryVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateNetworkACLEntryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateNetworkACLEntryRequest struct {
	QueryParams GetCreateNetworkACLEntryQueryParams
	Headers     GetCreateNetworkACLEntryHeaders
}

type GetCreateNetworkACLEntryResponse struct {
	ContentType string
	StatusCode  int64
}
