package shared



type OrcSerDe struct {
    BlockSizeBytes *int64 `json:"BlockSizeBytes,omitempty"`
    BloomFilterColumns []string `json:"BloomFilterColumns,omitempty"`
    BloomFilterFalsePositiveProbability *float64 `json:"BloomFilterFalsePositiveProbability,omitempty"`
    Compression *OrcCompressionEnum `json:"Compression,omitempty"`
    DictionaryKeyThreshold *float64 `json:"DictionaryKeyThreshold,omitempty"`
    EnablePadding *bool `json:"EnablePadding,omitempty"`
    FormatVersion *OrcFormatVersionEnum `json:"FormatVersion,omitempty"`
    PaddingTolerance *float64 `json:"PaddingTolerance,omitempty"`
    RowIndexStride *int64 `json:"RowIndexStride,omitempty"`
    StripeSizeBytes *int64 `json:"StripeSizeBytes,omitempty"`
    
}

