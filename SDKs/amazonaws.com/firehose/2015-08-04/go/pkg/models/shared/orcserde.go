package shared

type OrcSerDe struct {
	BlockSizeBytes                      *int64                `json:"BlockSizeBytes"`
	BloomFilterColumns                  []string              `json:"BloomFilterColumns"`
	BloomFilterFalsePositiveProbability *float64              `json:"BloomFilterFalsePositiveProbability"`
	Compression                         *OrcCompressionEnum   `json:"Compression"`
	DictionaryKeyThreshold              *float64              `json:"DictionaryKeyThreshold"`
	EnablePadding                       *bool                 `json:"EnablePadding"`
	FormatVersion                       *OrcFormatVersionEnum `json:"FormatVersion"`
	PaddingTolerance                    *float64              `json:"PaddingTolerance"`
	RowIndexStride                      *int64                `json:"RowIndexStride"`
	StripeSizeBytes                     *int64                `json:"StripeSizeBytes"`
}
