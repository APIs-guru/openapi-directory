# CheckCompatibilityResponse

The compatibility response with the compatibility of each dimension & metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_compatibilities** | [**List[DimensionCompatibility]**](DimensionCompatibility.md) | The compatibility of each dimension. | [optional] 
**metric_compatibilities** | [**List[MetricCompatibility]**](MetricCompatibility.md) | The compatibility of each metric. | [optional] 

## Example

```python
from openapi_client.models.check_compatibility_response import CheckCompatibilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckCompatibilityResponse from a JSON string
check_compatibility_response_instance = CheckCompatibilityResponse.from_json(json)
# print the JSON string representation of the object
print(CheckCompatibilityResponse.to_json())

# convert the object into a dict
check_compatibility_response_dict = check_compatibility_response_instance.to_dict()
# create an instance of CheckCompatibilityResponse from a dict
check_compatibility_response_from_dict = CheckCompatibilityResponse.from_dict(check_compatibility_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


