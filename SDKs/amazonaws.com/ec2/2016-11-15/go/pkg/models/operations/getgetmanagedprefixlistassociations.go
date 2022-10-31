package operations




type GetGetManagedPrefixListAssociationsActionEnum string

const (
    GetGetManagedPrefixListAssociationsActionEnumGetManagedPrefixListAssociations GetGetManagedPrefixListAssociationsActionEnum = "GetManagedPrefixListAssociations"
)



type GetGetManagedPrefixListAssociationsVersionEnum string

const (
    GetGetManagedPrefixListAssociationsVersionEnumTwoThousandAndSixteen1115 GetGetManagedPrefixListAssociationsVersionEnum = "2016-11-15"
)


type GetGetManagedPrefixListAssociationsQueryParams struct {
    Action GetGetManagedPrefixListAssociationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PrefixListID string `queryParam:"style=form,explode=true,name=PrefixListId"`
    Version GetGetManagedPrefixListAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetManagedPrefixListAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetManagedPrefixListAssociationsRequest struct {
    QueryParams GetGetManagedPrefixListAssociationsQueryParams 
    Headers GetGetManagedPrefixListAssociationsHeaders 
    
}

type GetGetManagedPrefixListAssociationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

