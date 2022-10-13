package shared

type LogDriverEnum string

const (
	LogDriverEnumJSONFile LogDriverEnum = "json-file"
	LogDriverEnumSyslog   LogDriverEnum = "syslog"
	LogDriverEnumJournald LogDriverEnum = "journald"
	LogDriverEnumGelf     LogDriverEnum = "gelf"
	LogDriverEnumFluentd  LogDriverEnum = "fluentd"
	LogDriverEnumAwslogs  LogDriverEnum = "awslogs"
	LogDriverEnumSplunk   LogDriverEnum = "splunk"
)
