package operations

type GetListConfigurationSetsActionEnum string

const (
	GetListConfigurationSetsActionEnumListConfigurationSets GetListConfigurationSetsActionEnum = "ListConfigurationSets"
)

type GetListConfigurationSetsVersionEnum string

const (
	GetListConfigurationSetsVersionEnumTwoThousandAndTen1201 GetListConfigurationSetsVersionEnum = "2010-12-01"
)

type GetListConfigurationSetsQueryParams struct {
	Action    GetListConfigurationSetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxItems  *int64                              `queryParam:"style=form,explode=true,name=MaxItems"`
	NextToken *string                             `queryParam:"style=form,explode=true,name=NextToken"`
	Version   GetListConfigurationSetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListConfigurationSetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListConfigurationSetsRequest struct {
	QueryParams GetListConfigurationSetsQueryParams
	Headers     GetListConfigurationSetsHeaders
}

type GetListConfigurationSetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
