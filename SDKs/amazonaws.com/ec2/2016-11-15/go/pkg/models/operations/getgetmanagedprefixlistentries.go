package operations




type GetGetManagedPrefixListEntriesActionEnum string

const (
    GetGetManagedPrefixListEntriesActionEnumGetManagedPrefixListEntries GetGetManagedPrefixListEntriesActionEnum = "GetManagedPrefixListEntries"
)



type GetGetManagedPrefixListEntriesVersionEnum string

const (
    GetGetManagedPrefixListEntriesVersionEnumTwoThousandAndSixteen1115 GetGetManagedPrefixListEntriesVersionEnum = "2016-11-15"
)


type GetGetManagedPrefixListEntriesQueryParams struct {
    Action GetGetManagedPrefixListEntriesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PrefixListID string `queryParam:"style=form,explode=true,name=PrefixListId"`
    TargetVersion *int64 `queryParam:"style=form,explode=true,name=TargetVersion"`
    Version GetGetManagedPrefixListEntriesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetManagedPrefixListEntriesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetManagedPrefixListEntriesRequest struct {
    QueryParams GetGetManagedPrefixListEntriesQueryParams 
    Headers GetGetManagedPrefixListEntriesHeaders 
    
}

type GetGetManagedPrefixListEntriesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

