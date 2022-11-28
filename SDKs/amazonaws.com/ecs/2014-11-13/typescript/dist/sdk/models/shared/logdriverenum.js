export var LogDriverEnum;
(function (LogDriverEnum) {
    LogDriverEnum["JsonFile"] = "json-file";
    LogDriverEnum["Syslog"] = "syslog";
    LogDriverEnum["Journald"] = "journald";
    LogDriverEnum["Gelf"] = "gelf";
    LogDriverEnum["Fluentd"] = "fluentd";
    LogDriverEnum["Awslogs"] = "awslogs";
    LogDriverEnum["Splunk"] = "splunk";
    LogDriverEnum["Awsfirelens"] = "awsfirelens";
})(LogDriverEnum || (LogDriverEnum = {}));
