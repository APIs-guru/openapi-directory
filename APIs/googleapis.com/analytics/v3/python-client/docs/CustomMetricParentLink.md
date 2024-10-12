# CustomMetricParentLink

Parent link for the custom metric. Points to the property to which the custom metric belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the property to which the custom metric belongs. | [optional] 
**type** | **str** | Type of the parent link. Set to \&quot;analytics#webproperty\&quot;. | [optional] [default to 'analytics#webproperty']

## Example

```python
from openapi_client.models.custom_metric_parent_link import CustomMetricParentLink

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMetricParentLink from a JSON string
custom_metric_parent_link_instance = CustomMetricParentLink.from_json(json)
# print the JSON string representation of the object
print(CustomMetricParentLink.to_json())

# convert the object into a dict
custom_metric_parent_link_dict = custom_metric_parent_link_instance.to_dict()
# create an instance of CustomMetricParentLink from a dict
custom_metric_parent_link_from_dict = CustomMetricParentLink.from_dict(custom_metric_parent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


