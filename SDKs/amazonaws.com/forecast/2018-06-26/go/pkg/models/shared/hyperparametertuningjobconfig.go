package shared

// HyperParameterTuningJobConfig
// <p>Configuration information for a hyperparameter tuning job. You specify this object in the <a>CreatePredictor</a> request.</p> <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.</p> <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.</p>
type HyperParameterTuningJobConfig struct {
	ParameterRanges *ParameterRanges `json:"ParameterRanges,omitempty"`
}
