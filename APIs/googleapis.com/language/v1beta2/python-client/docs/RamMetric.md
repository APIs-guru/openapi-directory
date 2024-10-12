# RamMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gib_sec** | **str** | Required. VM memory in Gigabyte second, e.g. 3600. Using int64 type to match billing metrics definition. | [optional] 
**machine_spec** | **str** | Required. Machine spec, e.g. N1_STANDARD_4. | [optional] 
**memories** | **float** | Required. VM memory in gb. | [optional] 
**ram_type** | **str** | Required. Type of ram. | [optional] 
**tracking_labels** | **Dict[str, str]** | Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels&#39; keys are defined with special format: goog-[\\p{Ll}\\p{N}]+ E.g. \&quot;key\&quot;: \&quot;goog-k8s-cluster-name\&quot;,\&quot;value\&quot;: \&quot;us-east1-b4rk\&quot; | [optional] 

## Example

```python
from openapi_client.models.ram_metric import RamMetric

# TODO update the JSON string below
json = "{}"
# create an instance of RamMetric from a JSON string
ram_metric_instance = RamMetric.from_json(json)
# print the JSON string representation of the object
print(RamMetric.to_json())

# convert the object into a dict
ram_metric_dict = ram_metric_instance.to_dict()
# create an instance of RamMetric from a dict
ram_metric_from_dict = RamMetric.from_dict(ram_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


