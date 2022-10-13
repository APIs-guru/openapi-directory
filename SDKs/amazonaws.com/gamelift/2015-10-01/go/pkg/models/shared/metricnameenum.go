package shared

type MetricNameEnum string

const (
	MetricNameEnumActivatingGameSessions       MetricNameEnum = "ActivatingGameSessions"
	MetricNameEnumActiveGameSessions           MetricNameEnum = "ActiveGameSessions"
	MetricNameEnumActiveInstances              MetricNameEnum = "ActiveInstances"
	MetricNameEnumAvailableGameSessions        MetricNameEnum = "AvailableGameSessions"
	MetricNameEnumAvailablePlayerSessions      MetricNameEnum = "AvailablePlayerSessions"
	MetricNameEnumCurrentPlayerSessions        MetricNameEnum = "CurrentPlayerSessions"
	MetricNameEnumIdleInstances                MetricNameEnum = "IdleInstances"
	MetricNameEnumPercentAvailableGameSessions MetricNameEnum = "PercentAvailableGameSessions"
	MetricNameEnumPercentIdleInstances         MetricNameEnum = "PercentIdleInstances"
	MetricNameEnumQueueDepth                   MetricNameEnum = "QueueDepth"
	MetricNameEnumWaitTime                     MetricNameEnum = "WaitTime"
)
