package shared




type TestTypeEnum string

const (
    TestTypeEnumBuiltinFuzz TestTypeEnum = "BUILTIN_FUZZ"
TestTypeEnumBuiltinExplorer TestTypeEnum = "BUILTIN_EXPLORER"
TestTypeEnumWebPerformanceProfile TestTypeEnum = "WEB_PERFORMANCE_PROFILE"
TestTypeEnumAppiumJavaJunit TestTypeEnum = "APPIUM_JAVA_JUNIT"
TestTypeEnumAppiumJavaTestng TestTypeEnum = "APPIUM_JAVA_TESTNG"
TestTypeEnumAppiumPython TestTypeEnum = "APPIUM_PYTHON"
TestTypeEnumAppiumNode TestTypeEnum = "APPIUM_NODE"
TestTypeEnumAppiumRuby TestTypeEnum = "APPIUM_RUBY"
TestTypeEnumAppiumWebJavaJunit TestTypeEnum = "APPIUM_WEB_JAVA_JUNIT"
TestTypeEnumAppiumWebJavaTestng TestTypeEnum = "APPIUM_WEB_JAVA_TESTNG"
TestTypeEnumAppiumWebPython TestTypeEnum = "APPIUM_WEB_PYTHON"
TestTypeEnumAppiumWebNode TestTypeEnum = "APPIUM_WEB_NODE"
TestTypeEnumAppiumWebRuby TestTypeEnum = "APPIUM_WEB_RUBY"
TestTypeEnumCalabash TestTypeEnum = "CALABASH"
TestTypeEnumInstrumentation TestTypeEnum = "INSTRUMENTATION"
TestTypeEnumUiautomation TestTypeEnum = "UIAUTOMATION"
TestTypeEnumUiautomator TestTypeEnum = "UIAUTOMATOR"
TestTypeEnumXctest TestTypeEnum = "XCTEST"
TestTypeEnumXctestUI TestTypeEnum = "XCTEST_UI"
TestTypeEnumRemoteAccessRecord TestTypeEnum = "REMOTE_ACCESS_RECORD"
TestTypeEnumRemoteAccessReplay TestTypeEnum = "REMOTE_ACCESS_REPLAY"
)


