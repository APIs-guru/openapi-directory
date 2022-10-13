package operations

import (
	"openapi/pkg/models/shared"
)

type ListCuratedEnvironmentImagesXAmzTargetEnum string

const (
	ListCuratedEnvironmentImagesXAmzTargetEnumCodeBuild20161006ListCuratedEnvironmentImages ListCuratedEnvironmentImagesXAmzTargetEnum = "CodeBuild_20161006.ListCuratedEnvironmentImages"
)

type ListCuratedEnvironmentImagesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCuratedEnvironmentImagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCuratedEnvironmentImagesRequest struct {
	Headers ListCuratedEnvironmentImagesHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type ListCuratedEnvironmentImagesResponse struct {
	ContentType                        string
	ListCuratedEnvironmentImagesOutput *shared.ListCuratedEnvironmentImagesOutput
	StatusCode                         int64
}
