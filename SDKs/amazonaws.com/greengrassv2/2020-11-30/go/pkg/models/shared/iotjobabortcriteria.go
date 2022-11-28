package shared

// IoTJobAbortCriteria
// <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>
type IoTJobAbortCriteria struct {
	Action                    IoTJobAbortActionEnum          `json:"action"`
	FailureType               IoTJobExecutionFailureTypeEnum `json:"failureType"`
	MinNumberOfExecutedThings int64                          `json:"minNumberOfExecutedThings"`
	ThresholdPercentage       float64                        `json:"thresholdPercentage"`
}
