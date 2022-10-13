package operations

type PostReplaceIamInstanceProfileAssociationActionEnum string

const (
	PostReplaceIamInstanceProfileAssociationActionEnumReplaceIamInstanceProfileAssociation PostReplaceIamInstanceProfileAssociationActionEnum = "ReplaceIamInstanceProfileAssociation"
)

type PostReplaceIamInstanceProfileAssociationVersionEnum string

const (
	PostReplaceIamInstanceProfileAssociationVersionEnumTwoThousandAndSixteen1115 PostReplaceIamInstanceProfileAssociationVersionEnum = "2016-11-15"
)

type PostReplaceIamInstanceProfileAssociationQueryParams struct {
	Action  PostReplaceIamInstanceProfileAssociationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReplaceIamInstanceProfileAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReplaceIamInstanceProfileAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReplaceIamInstanceProfileAssociationRequest struct {
	QueryParams PostReplaceIamInstanceProfileAssociationQueryParams
	Headers     PostReplaceIamInstanceProfileAssociationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReplaceIamInstanceProfileAssociationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
