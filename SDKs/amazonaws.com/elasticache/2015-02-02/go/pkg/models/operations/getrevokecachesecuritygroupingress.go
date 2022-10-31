package operations

type GetRevokeCacheSecurityGroupIngressActionEnum string

const (
	GetRevokeCacheSecurityGroupIngressActionEnumRevokeCacheSecurityGroupIngress GetRevokeCacheSecurityGroupIngressActionEnum = "RevokeCacheSecurityGroupIngress"
)

type GetRevokeCacheSecurityGroupIngressVersionEnum string

const (
	GetRevokeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202 GetRevokeCacheSecurityGroupIngressVersionEnum = "2015-02-02"
)

type GetRevokeCacheSecurityGroupIngressQueryParams struct {
	Action                  GetRevokeCacheSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheSecurityGroupName  string                                        `queryParam:"style=form,explode=true,name=CacheSecurityGroupName"`
	Ec2SecurityGroupName    string                                        `queryParam:"style=form,explode=true,name=EC2SecurityGroupName"`
	Ec2SecurityGroupOwnerID string                                        `queryParam:"style=form,explode=true,name=EC2SecurityGroupOwnerId"`
	Version                 GetRevokeCacheSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRevokeCacheSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRevokeCacheSecurityGroupIngressRequest struct {
	QueryParams GetRevokeCacheSecurityGroupIngressQueryParams
	Headers     GetRevokeCacheSecurityGroupIngressHeaders
}

type GetRevokeCacheSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
