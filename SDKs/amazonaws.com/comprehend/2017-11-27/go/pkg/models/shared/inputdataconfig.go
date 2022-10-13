package shared

type InputDataConfig struct {
	DocumentReaderConfig *DocumentReaderConfig `json:"DocumentReaderConfig"`
	InputFormat          *InputFormatEnum      `json:"InputFormat"`
	S3URI                string                `json:"S3Uri"`
}
