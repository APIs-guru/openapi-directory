package operations

type ListFieldLevelEncryptionConfigs20180618QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListFieldLevelEncryptionConfigs20180618Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListFieldLevelEncryptionConfigs20180618Request struct {
	QueryParams ListFieldLevelEncryptionConfigs20180618QueryParams
	Headers     ListFieldLevelEncryptionConfigs20180618Headers
}

type ListFieldLevelEncryptionConfigs20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
