# ControllersSystemDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ControllersSystemItem**](ControllersSystemItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_detail_response import ControllersSystemDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemDetailResponse from a JSON string
controllers_system_detail_response_instance = ControllersSystemDetailResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemDetailResponse.to_json())

# convert the object into a dict
controllers_system_detail_response_dict = controllers_system_detail_response_instance.to_dict()
# create an instance of ControllersSystemDetailResponse from a dict
controllers_system_detail_response_from_dict = ControllersSystemDetailResponse.from_dict(controllers_system_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


