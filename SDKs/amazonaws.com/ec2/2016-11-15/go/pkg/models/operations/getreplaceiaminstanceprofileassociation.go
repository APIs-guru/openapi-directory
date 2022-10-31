package operations




type GetReplaceIamInstanceProfileAssociationActionEnum string

const (
    GetReplaceIamInstanceProfileAssociationActionEnumReplaceIamInstanceProfileAssociation GetReplaceIamInstanceProfileAssociationActionEnum = "ReplaceIamInstanceProfileAssociation"
)


type GetReplaceIamInstanceProfileAssociationIamInstanceProfile struct {
    Arn *string `queryParam:"name=Arn"`
    Name *string `queryParam:"name=Name"`
    
}


type GetReplaceIamInstanceProfileAssociationVersionEnum string

const (
    GetReplaceIamInstanceProfileAssociationVersionEnumTwoThousandAndSixteen1115 GetReplaceIamInstanceProfileAssociationVersionEnum = "2016-11-15"
)


type GetReplaceIamInstanceProfileAssociationQueryParams struct {
    Action GetReplaceIamInstanceProfileAssociationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AssociationID string `queryParam:"style=form,explode=true,name=AssociationId"`
    IamInstanceProfile GetReplaceIamInstanceProfileAssociationIamInstanceProfile `queryParam:"style=form,explode=true,name=IamInstanceProfile"`
    Version GetReplaceIamInstanceProfileAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetReplaceIamInstanceProfileAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetReplaceIamInstanceProfileAssociationRequest struct {
    QueryParams GetReplaceIamInstanceProfileAssociationQueryParams 
    Headers GetReplaceIamInstanceProfileAssociationHeaders 
    
}

type GetReplaceIamInstanceProfileAssociationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

