package shared

type InsightFeedbackOptionEnum string

const (
	InsightFeedbackOptionEnumValidCollection      InsightFeedbackOptionEnum = "VALID_COLLECTION"
	InsightFeedbackOptionEnumRecommendationUseful InsightFeedbackOptionEnum = "RECOMMENDATION_USEFUL"
	InsightFeedbackOptionEnumAlertTooSensitive    InsightFeedbackOptionEnum = "ALERT_TOO_SENSITIVE"
	InsightFeedbackOptionEnumDataNoisyAnomaly     InsightFeedbackOptionEnum = "DATA_NOISY_ANOMALY"
	InsightFeedbackOptionEnumDataIncorrect        InsightFeedbackOptionEnum = "DATA_INCORRECT"
)
