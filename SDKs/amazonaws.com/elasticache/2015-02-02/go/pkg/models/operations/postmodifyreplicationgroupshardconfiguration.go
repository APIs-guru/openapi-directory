package operations

type PostModifyReplicationGroupShardConfigurationActionEnum string

const (
	PostModifyReplicationGroupShardConfigurationActionEnumModifyReplicationGroupShardConfiguration PostModifyReplicationGroupShardConfigurationActionEnum = "ModifyReplicationGroupShardConfiguration"
)

type PostModifyReplicationGroupShardConfigurationVersionEnum string

const (
	PostModifyReplicationGroupShardConfigurationVersionEnumTwoThousandAndFifteen0202 PostModifyReplicationGroupShardConfigurationVersionEnum = "2015-02-02"
)

type PostModifyReplicationGroupShardConfigurationQueryParams struct {
	Action  PostModifyReplicationGroupShardConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyReplicationGroupShardConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyReplicationGroupShardConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyReplicationGroupShardConfigurationRequest struct {
	QueryParams PostModifyReplicationGroupShardConfigurationQueryParams
	Headers     PostModifyReplicationGroupShardConfigurationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyReplicationGroupShardConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
