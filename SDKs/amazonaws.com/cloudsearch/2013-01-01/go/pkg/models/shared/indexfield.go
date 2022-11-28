package shared

// IndexField
// Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
type IndexField struct {
	DateArrayOptions    *DateArrayOptions
	DateOptions         *DateOptions
	DoubleArrayOptions  *DoubleArrayOptions
	DoubleOptions       *DoubleOptions
	IndexFieldName      string
	IndexFieldType      IndexFieldTypeEnum
	IntArrayOptions     *IntArrayOptions
	IntOptions          *IntOptions
	LatLonOptions       *LatLonOptions
	LiteralArrayOptions *LiteralArrayOptions
	LiteralOptions      *LiteralOptions
	TextArrayOptions    *TextArrayOptions
	TextOptions         *TextOptions
}
