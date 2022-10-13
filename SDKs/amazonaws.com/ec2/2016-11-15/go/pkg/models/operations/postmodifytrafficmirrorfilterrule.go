package operations

type PostModifyTrafficMirrorFilterRuleActionEnum string

const (
	PostModifyTrafficMirrorFilterRuleActionEnumModifyTrafficMirrorFilterRule PostModifyTrafficMirrorFilterRuleActionEnum = "ModifyTrafficMirrorFilterRule"
)

type PostModifyTrafficMirrorFilterRuleVersionEnum string

const (
	PostModifyTrafficMirrorFilterRuleVersionEnumTwoThousandAndSixteen1115 PostModifyTrafficMirrorFilterRuleVersionEnum = "2016-11-15"
)

type PostModifyTrafficMirrorFilterRuleQueryParams struct {
	Action  PostModifyTrafficMirrorFilterRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyTrafficMirrorFilterRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyTrafficMirrorFilterRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyTrafficMirrorFilterRuleRequest struct {
	QueryParams PostModifyTrafficMirrorFilterRuleQueryParams
	Headers     PostModifyTrafficMirrorFilterRuleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyTrafficMirrorFilterRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
