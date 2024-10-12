# Accelerator

An accelerator card attached to the instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Optional. Number of accelerator cards exposed to the instance. | [optional] 
**type** | **str** | Optional. Type of accelerator resource to attach to the instance, for example, &#x60;\&quot;nvidia-tesla-p100\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.accelerator import Accelerator

# TODO update the JSON string below
json = "{}"
# create an instance of Accelerator from a JSON string
accelerator_instance = Accelerator.from_json(json)
# print the JSON string representation of the object
print(Accelerator.to_json())

# convert the object into a dict
accelerator_dict = accelerator_instance.to_dict()
# create an instance of Accelerator from a dict
accelerator_from_dict = Accelerator.from_dict(accelerator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


