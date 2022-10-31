package shared

import (
"time")

type ExperimentSummary struct {
    CreationTime *time.Time `json:"creationTime,omitempty"`
    ExperimentTemplateID *string `json:"experimentTemplateId,omitempty"`
    ID *string `json:"id,omitempty"`
    State *ExperimentState `json:"state,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

