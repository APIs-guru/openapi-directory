package shared



type DescribeRegionsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    RegionsDescription []RegionDescription `json:"RegionsDescription,omitempty"`
    
}

