# CreateOrUpdateErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Error**](Error.md) |  | [optional] 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_or_update_error_response import CreateOrUpdateErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateErrorResponse from a JSON string
create_or_update_error_response_instance = CreateOrUpdateErrorResponse.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateErrorResponse.to_json())

# convert the object into a dict
create_or_update_error_response_dict = create_or_update_error_response_instance.to_dict()
# create an instance of CreateOrUpdateErrorResponse from a dict
create_or_update_error_response_from_dict = CreateOrUpdateErrorResponse.from_dict(create_or_update_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


