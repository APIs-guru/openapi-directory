package operations




type PostListPlatformBranchesActionEnum string

const (
    PostListPlatformBranchesActionEnumListPlatformBranches PostListPlatformBranchesActionEnum = "ListPlatformBranches"
)



type PostListPlatformBranchesVersionEnum string

const (
    PostListPlatformBranchesVersionEnumTwoThousandAndTen1201 PostListPlatformBranchesVersionEnum = "2010-12-01"
)


type PostListPlatformBranchesQueryParams struct {
    Action PostListPlatformBranchesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostListPlatformBranchesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListPlatformBranchesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListPlatformBranchesRequest struct {
    QueryParams PostListPlatformBranchesQueryParams 
    Headers PostListPlatformBranchesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListPlatformBranchesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

