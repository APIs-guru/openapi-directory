package shared

type ArtifactTypeEnum string

const (
	ArtifactTypeEnumUnknown                ArtifactTypeEnum = "UNKNOWN"
	ArtifactTypeEnumScreenshot             ArtifactTypeEnum = "SCREENSHOT"
	ArtifactTypeEnumDeviceLog              ArtifactTypeEnum = "DEVICE_LOG"
	ArtifactTypeEnumMessageLog             ArtifactTypeEnum = "MESSAGE_LOG"
	ArtifactTypeEnumVideoLog               ArtifactTypeEnum = "VIDEO_LOG"
	ArtifactTypeEnumResultLog              ArtifactTypeEnum = "RESULT_LOG"
	ArtifactTypeEnumServiceLog             ArtifactTypeEnum = "SERVICE_LOG"
	ArtifactTypeEnumWebkitLog              ArtifactTypeEnum = "WEBKIT_LOG"
	ArtifactTypeEnumInstrumentationOutput  ArtifactTypeEnum = "INSTRUMENTATION_OUTPUT"
	ArtifactTypeEnumExerciserMonkeyOutput  ArtifactTypeEnum = "EXERCISER_MONKEY_OUTPUT"
	ArtifactTypeEnumCalabashJSONOutput     ArtifactTypeEnum = "CALABASH_JSON_OUTPUT"
	ArtifactTypeEnumCalabashPrettyOutput   ArtifactTypeEnum = "CALABASH_PRETTY_OUTPUT"
	ArtifactTypeEnumCalabashStandardOutput ArtifactTypeEnum = "CALABASH_STANDARD_OUTPUT"
	ArtifactTypeEnumCalabashJavaXMLOutput  ArtifactTypeEnum = "CALABASH_JAVA_XML_OUTPUT"
	ArtifactTypeEnumAutomationOutput       ArtifactTypeEnum = "AUTOMATION_OUTPUT"
	ArtifactTypeEnumAppiumServerOutput     ArtifactTypeEnum = "APPIUM_SERVER_OUTPUT"
	ArtifactTypeEnumAppiumJavaOutput       ArtifactTypeEnum = "APPIUM_JAVA_OUTPUT"
	ArtifactTypeEnumAppiumJavaXMLOutput    ArtifactTypeEnum = "APPIUM_JAVA_XML_OUTPUT"
	ArtifactTypeEnumAppiumPythonOutput     ArtifactTypeEnum = "APPIUM_PYTHON_OUTPUT"
	ArtifactTypeEnumAppiumPythonXMLOutput  ArtifactTypeEnum = "APPIUM_PYTHON_XML_OUTPUT"
	ArtifactTypeEnumExplorerEventLog       ArtifactTypeEnum = "EXPLORER_EVENT_LOG"
	ArtifactTypeEnumExplorerSummaryLog     ArtifactTypeEnum = "EXPLORER_SUMMARY_LOG"
	ArtifactTypeEnumApplicationCrashReport ArtifactTypeEnum = "APPLICATION_CRASH_REPORT"
	ArtifactTypeEnumXctestLog              ArtifactTypeEnum = "XCTEST_LOG"
	ArtifactTypeEnumVideo                  ArtifactTypeEnum = "VIDEO"
	ArtifactTypeEnumCustomerArtifact       ArtifactTypeEnum = "CUSTOMER_ARTIFACT"
	ArtifactTypeEnumCustomerArtifactLog    ArtifactTypeEnum = "CUSTOMER_ARTIFACT_LOG"
	ArtifactTypeEnumTestspecOutput         ArtifactTypeEnum = "TESTSPEC_OUTPUT"
)
