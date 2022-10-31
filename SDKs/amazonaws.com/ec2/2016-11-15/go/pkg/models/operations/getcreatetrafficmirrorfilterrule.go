package operations

type GetCreateTrafficMirrorFilterRuleActionEnum string

const (
	GetCreateTrafficMirrorFilterRuleActionEnumCreateTrafficMirrorFilterRule GetCreateTrafficMirrorFilterRuleActionEnum = "CreateTrafficMirrorFilterRule"
)

type GetCreateTrafficMirrorFilterRuleDestinationPortRange struct {
	FromPort *int64 `queryParam:"name=FromPort"`
	ToPort   *int64 `queryParam:"name=ToPort"`
}

type GetCreateTrafficMirrorFilterRuleRuleActionEnum string

const (
	GetCreateTrafficMirrorFilterRuleRuleActionEnumAccept GetCreateTrafficMirrorFilterRuleRuleActionEnum = "accept"
	GetCreateTrafficMirrorFilterRuleRuleActionEnumReject GetCreateTrafficMirrorFilterRuleRuleActionEnum = "reject"
)

type GetCreateTrafficMirrorFilterRuleSourcePortRange struct {
	FromPort *int64 `queryParam:"name=FromPort"`
	ToPort   *int64 `queryParam:"name=ToPort"`
}

type GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum string

const (
	GetCreateTrafficMirrorFilterRuleTrafficDirectionEnumIngress GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum = "ingress"
	GetCreateTrafficMirrorFilterRuleTrafficDirectionEnumEgress  GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum = "egress"
)

type GetCreateTrafficMirrorFilterRuleVersionEnum string

const (
	GetCreateTrafficMirrorFilterRuleVersionEnumTwoThousandAndSixteen1115 GetCreateTrafficMirrorFilterRuleVersionEnum = "2016-11-15"
)

type GetCreateTrafficMirrorFilterRuleQueryParams struct {
	Action                GetCreateTrafficMirrorFilterRuleActionEnum            `queryParam:"style=form,explode=true,name=Action"`
	ClientToken           *string                                               `queryParam:"style=form,explode=true,name=ClientToken"`
	Description           *string                                               `queryParam:"style=form,explode=true,name=Description"`
	DestinationCidrBlock  string                                                `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	DestinationPortRange  *GetCreateTrafficMirrorFilterRuleDestinationPortRange `queryParam:"style=form,explode=true,name=DestinationPortRange"`
	DryRun                *bool                                                 `queryParam:"style=form,explode=true,name=DryRun"`
	Protocol              *int64                                                `queryParam:"style=form,explode=true,name=Protocol"`
	RuleAction            GetCreateTrafficMirrorFilterRuleRuleActionEnum        `queryParam:"style=form,explode=true,name=RuleAction"`
	RuleNumber            int64                                                 `queryParam:"style=form,explode=true,name=RuleNumber"`
	SourceCidrBlock       string                                                `queryParam:"style=form,explode=true,name=SourceCidrBlock"`
	SourcePortRange       *GetCreateTrafficMirrorFilterRuleSourcePortRange      `queryParam:"style=form,explode=true,name=SourcePortRange"`
	TrafficDirection      GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum  `queryParam:"style=form,explode=true,name=TrafficDirection"`
	TrafficMirrorFilterID string                                                `queryParam:"style=form,explode=true,name=TrafficMirrorFilterId"`
	Version               GetCreateTrafficMirrorFilterRuleVersionEnum           `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateTrafficMirrorFilterRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateTrafficMirrorFilterRuleRequest struct {
	QueryParams GetCreateTrafficMirrorFilterRuleQueryParams
	Headers     GetCreateTrafficMirrorFilterRuleHeaders
}

type GetCreateTrafficMirrorFilterRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
