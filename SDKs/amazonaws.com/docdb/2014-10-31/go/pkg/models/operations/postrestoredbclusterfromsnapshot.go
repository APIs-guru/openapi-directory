package operations

type PostRestoreDbClusterFromSnapshotActionEnum string

const (
	PostRestoreDbClusterFromSnapshotActionEnumRestoreDbClusterFromSnapshot PostRestoreDbClusterFromSnapshotActionEnum = "RestoreDBClusterFromSnapshot"
)

type PostRestoreDbClusterFromSnapshotVersionEnum string

const (
	PostRestoreDbClusterFromSnapshotVersionEnumTwoThousandAndFourteen1031 PostRestoreDbClusterFromSnapshotVersionEnum = "2014-10-31"
)

type PostRestoreDbClusterFromSnapshotQueryParams struct {
	Action  PostRestoreDbClusterFromSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRestoreDbClusterFromSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRestoreDbClusterFromSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRestoreDbClusterFromSnapshotRequest struct {
	QueryParams PostRestoreDbClusterFromSnapshotQueryParams
	Headers     PostRestoreDbClusterFromSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRestoreDbClusterFromSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
