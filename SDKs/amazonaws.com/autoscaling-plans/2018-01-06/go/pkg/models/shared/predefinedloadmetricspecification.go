package shared

// PredefinedLoadMetricSpecification
// <p>Represents a predefined metric that can be used for predictive scaling.</p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>
type PredefinedLoadMetricSpecification struct {
	PredefinedLoadMetricType LoadMetricTypeEnum `json:"PredefinedLoadMetricType"`
	ResourceLabel            *string            `json:"ResourceLabel,omitempty"`
}
