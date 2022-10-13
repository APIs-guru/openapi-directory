package shared

type TierEnum string

const (
	TierEnumCustom                             TierEnum = "CUSTOM"
	TierEnumDefault                            TierEnum = "DEFAULT"
	TierEnumDotNetCore                         TierEnum = "DOT_NET_CORE"
	TierEnumDotNetWorker                       TierEnum = "DOT_NET_WORKER"
	TierEnumDotNetWebTier                      TierEnum = "DOT_NET_WEB_TIER"
	TierEnumDotNetWeb                          TierEnum = "DOT_NET_WEB"
	TierEnumSQLServer                          TierEnum = "SQL_SERVER"
	TierEnumSQLServerAlwaysonAvailabilityGroup TierEnum = "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP"
	TierEnumMysql                              TierEnum = "MYSQL"
	TierEnumPostgresql                         TierEnum = "POSTGRESQL"
	TierEnumJavaJmx                            TierEnum = "JAVA_JMX"
	TierEnumOracle                             TierEnum = "ORACLE"
)
