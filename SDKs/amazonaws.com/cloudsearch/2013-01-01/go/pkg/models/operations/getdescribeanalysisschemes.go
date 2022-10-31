package operations




type GetDescribeAnalysisSchemesActionEnum string

const (
    GetDescribeAnalysisSchemesActionEnumDescribeAnalysisSchemes GetDescribeAnalysisSchemesActionEnum = "DescribeAnalysisSchemes"
)



type GetDescribeAnalysisSchemesVersionEnum string

const (
    GetDescribeAnalysisSchemesVersionEnumTwoThousandAndThirteen0101 GetDescribeAnalysisSchemesVersionEnum = "2013-01-01"
)


type GetDescribeAnalysisSchemesQueryParams struct {
    Action GetDescribeAnalysisSchemesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AnalysisSchemeNames []string `queryParam:"style=form,explode=true,name=AnalysisSchemeNames"`
    Deployed *bool `queryParam:"style=form,explode=true,name=Deployed"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    Version GetDescribeAnalysisSchemesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeAnalysisSchemesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeAnalysisSchemesRequest struct {
    QueryParams GetDescribeAnalysisSchemesQueryParams 
    Headers GetDescribeAnalysisSchemesHeaders 
    
}

type GetDescribeAnalysisSchemesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

