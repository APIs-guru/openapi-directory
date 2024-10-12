# CreateActionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResource**](ActionResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_action_response import CreateActionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateActionResponse from a JSON string
create_action_response_instance = CreateActionResponse.from_json(json)
# print the JSON string representation of the object
print(CreateActionResponse.to_json())

# convert the object into a dict
create_action_response_dict = create_action_response_instance.to_dict()
# create an instance of CreateActionResponse from a dict
create_action_response_from_dict = CreateActionResponse.from_dict(create_action_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


