# IotHubDescriptionListResult

The JSON-serialized array of IotHubDescription objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | [**List[IotHubDescription]**](IotHubDescription.md) | The array of IotHubDescription objects. | [optional] 

## Example

```python
from openapi_client.models.iot_hub_description_list_result import IotHubDescriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubDescriptionListResult from a JSON string
iot_hub_description_list_result_instance = IotHubDescriptionListResult.from_json(json)
# print the JSON string representation of the object
print(IotHubDescriptionListResult.to_json())

# convert the object into a dict
iot_hub_description_list_result_dict = iot_hub_description_list_result_instance.to_dict()
# create an instance of IotHubDescriptionListResult from a dict
iot_hub_description_list_result_from_dict = IotHubDescriptionListResult.from_dict(iot_hub_description_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


