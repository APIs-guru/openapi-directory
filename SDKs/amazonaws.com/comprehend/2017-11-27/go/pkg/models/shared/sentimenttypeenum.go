package shared

type SentimentTypeEnum string

const (
	SentimentTypeEnumPositive SentimentTypeEnum = "POSITIVE"
	SentimentTypeEnumNegative SentimentTypeEnum = "NEGATIVE"
	SentimentTypeEnumNeutral  SentimentTypeEnum = "NEUTRAL"
	SentimentTypeEnumMixed    SentimentTypeEnum = "MIXED"
)
