package shared

// NamedRankExpression
// A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.
type NamedRankExpression struct {
	RankExpression string
	RankName       string
}
