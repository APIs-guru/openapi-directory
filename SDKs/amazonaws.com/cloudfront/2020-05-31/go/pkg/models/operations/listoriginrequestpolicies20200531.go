package operations

type ListOriginRequestPolicies20200531TypeEnum string

const (
	ListOriginRequestPolicies20200531TypeEnumManaged ListOriginRequestPolicies20200531TypeEnum = "managed"
	ListOriginRequestPolicies20200531TypeEnumCustom  ListOriginRequestPolicies20200531TypeEnum = "custom"
)

type ListOriginRequestPolicies20200531QueryParams struct {
	Marker   *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                                    `queryParam:"style=form,explode=true,name=MaxItems"`
	Type     *ListOriginRequestPolicies20200531TypeEnum `queryParam:"style=form,explode=true,name=Type"`
}

type ListOriginRequestPolicies20200531Headers struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListOriginRequestPolicies20200531Request struct {
	QueryParams ListOriginRequestPolicies20200531QueryParams
	Headers     ListOriginRequestPolicies20200531Headers
}

type ListOriginRequestPolicies20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
