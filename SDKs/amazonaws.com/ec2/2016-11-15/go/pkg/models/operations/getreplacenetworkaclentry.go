package operations

type GetReplaceNetworkACLEntryActionEnum string

const (
	GetReplaceNetworkACLEntryActionEnumReplaceNetworkACLEntry GetReplaceNetworkACLEntryActionEnum = "ReplaceNetworkAclEntry"
)

// GetReplaceNetworkACLEntryIcmp
// Describes the ICMP type and code.
type GetReplaceNetworkACLEntryIcmp struct {
	Code *int64 `queryParam:"name=Code"`
	Type *int64 `queryParam:"name=Type"`
}

// GetReplaceNetworkACLEntryPortRange
// Describes a range of ports.
type GetReplaceNetworkACLEntryPortRange struct {
	From *int64 `queryParam:"name=From"`
	To   *int64 `queryParam:"name=To"`
}

type GetReplaceNetworkACLEntryRuleActionEnum string

const (
	GetReplaceNetworkACLEntryRuleActionEnumAllow GetReplaceNetworkACLEntryRuleActionEnum = "allow"
	GetReplaceNetworkACLEntryRuleActionEnumDeny  GetReplaceNetworkACLEntryRuleActionEnum = "deny"
)

type GetReplaceNetworkACLEntryVersionEnum string

const (
	GetReplaceNetworkACLEntryVersionEnumTwoThousandAndSixteen1115 GetReplaceNetworkACLEntryVersionEnum = "2016-11-15"
)

type GetReplaceNetworkACLEntryQueryParams struct {
	Action        GetReplaceNetworkACLEntryActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	CidrBlock     *string                                 `queryParam:"style=form,explode=true,name=CidrBlock"`
	DryRun        *bool                                   `queryParam:"style=form,explode=true,name=DryRun"`
	Egress        bool                                    `queryParam:"style=form,explode=true,name=Egress"`
	Icmp          *GetReplaceNetworkACLEntryIcmp          `queryParam:"style=form,explode=true,name=Icmp"`
	Ipv6CidrBlock *string                                 `queryParam:"style=form,explode=true,name=Ipv6CidrBlock"`
	NetworkACLID  string                                  `queryParam:"style=form,explode=true,name=NetworkAclId"`
	PortRange     *GetReplaceNetworkACLEntryPortRange     `queryParam:"style=form,explode=true,name=PortRange"`
	Protocol      string                                  `queryParam:"style=form,explode=true,name=Protocol"`
	RuleAction    GetReplaceNetworkACLEntryRuleActionEnum `queryParam:"style=form,explode=true,name=RuleAction"`
	RuleNumber    int64                                   `queryParam:"style=form,explode=true,name=RuleNumber"`
	Version       GetReplaceNetworkACLEntryVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
}

type GetReplaceNetworkACLEntryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetReplaceNetworkACLEntryRequest struct {
	QueryParams GetReplaceNetworkACLEntryQueryParams
	Headers     GetReplaceNetworkACLEntryHeaders
}

type GetReplaceNetworkACLEntryResponse struct {
	ContentType string
	StatusCode  int64
}
