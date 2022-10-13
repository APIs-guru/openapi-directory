package shared

type NodeTypeEnum string

const (
	NodeTypeEnumCrawler NodeTypeEnum = "CRAWLER"
	NodeTypeEnumJob     NodeTypeEnum = "JOB"
	NodeTypeEnumTrigger NodeTypeEnum = "TRIGGER"
)
