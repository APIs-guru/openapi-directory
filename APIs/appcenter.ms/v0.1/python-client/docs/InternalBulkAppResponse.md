# InternalBulkAppResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_name** | **str** | The name of the app | [optional] 
**owner_display_name** | **str** | The display name of the owner | [optional] 

## Example

```python
from openapi_client.models.internal_bulk_app_response import InternalBulkAppResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InternalBulkAppResponse from a JSON string
internal_bulk_app_response_instance = InternalBulkAppResponse.from_json(json)
# print the JSON string representation of the object
print(InternalBulkAppResponse.to_json())

# convert the object into a dict
internal_bulk_app_response_dict = internal_bulk_app_response_instance.to_dict()
# create an instance of InternalBulkAppResponse from a dict
internal_bulk_app_response_from_dict = InternalBulkAppResponse.from_dict(internal_bulk_app_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


