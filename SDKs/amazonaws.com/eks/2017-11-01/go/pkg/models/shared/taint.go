package shared

type Taint struct {
	Effect *TaintEffectEnum `json:"effect"`
	Key    *string          `json:"key"`
	Value  *string          `json:"value"`
}
