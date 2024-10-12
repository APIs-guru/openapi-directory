# ServiceLoadMetricWeight

Determines the metric weight relative to the other metrics that are configured for this service. During runtime, if two metrics end up in conflict, the Cluster Resource Manager prefers the metric with the higher weight. Possible values are following.    - Zero - Disables resource balancing for this metric. This value is zero.   - Low - Specifies the metric weight of the service load as Low. The value is 1.   - Medium - Specifies the metric weight of the service load as Medium. The value is 2.   - High - Specifies the metric weight of the service load as High. The value is 3. 

## Enum

* `ZERO` (value: `'Zero'`)

* `LOW` (value: `'Low'`)

* `MEDIUM` (value: `'Medium'`)

* `HIGH` (value: `'High'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


