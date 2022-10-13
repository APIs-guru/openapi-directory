package operations

type ListFieldLevelEncryptionProfiles20181105QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListFieldLevelEncryptionProfiles20181105Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListFieldLevelEncryptionProfiles20181105Request struct {
	QueryParams ListFieldLevelEncryptionProfiles20181105QueryParams
	Headers     ListFieldLevelEncryptionProfiles20181105Headers
}

type ListFieldLevelEncryptionProfiles20181105Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
