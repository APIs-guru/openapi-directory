package shared




type SampleTypeEnum string

const (
    SampleTypeEnumCPU SampleTypeEnum = "CPU"
SampleTypeEnumMemory SampleTypeEnum = "MEMORY"
SampleTypeEnumThreads SampleTypeEnum = "THREADS"
SampleTypeEnumRxRate SampleTypeEnum = "RX_RATE"
SampleTypeEnumTxRate SampleTypeEnum = "TX_RATE"
SampleTypeEnumRx SampleTypeEnum = "RX"
SampleTypeEnumTx SampleTypeEnum = "TX"
SampleTypeEnumNativeFrames SampleTypeEnum = "NATIVE_FRAMES"
SampleTypeEnumNativeFps SampleTypeEnum = "NATIVE_FPS"
SampleTypeEnumNativeMinDrawtime SampleTypeEnum = "NATIVE_MIN_DRAWTIME"
SampleTypeEnumNativeAvgDrawtime SampleTypeEnum = "NATIVE_AVG_DRAWTIME"
SampleTypeEnumNativeMaxDrawtime SampleTypeEnum = "NATIVE_MAX_DRAWTIME"
SampleTypeEnumOpenglFrames SampleTypeEnum = "OPENGL_FRAMES"
SampleTypeEnumOpenglFps SampleTypeEnum = "OPENGL_FPS"
SampleTypeEnumOpenglMinDrawtime SampleTypeEnum = "OPENGL_MIN_DRAWTIME"
SampleTypeEnumOpenglAvgDrawtime SampleTypeEnum = "OPENGL_AVG_DRAWTIME"
SampleTypeEnumOpenglMaxDrawtime SampleTypeEnum = "OPENGL_MAX_DRAWTIME"
)


