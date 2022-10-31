package shared



type InputDataConfig struct {
    DocumentReaderConfig *DocumentReaderConfig `json:"DocumentReaderConfig,omitempty"`
    InputFormat *InputFormatEnum `json:"InputFormat,omitempty"`
    S3URI string `json:"S3Uri"`
    
}

