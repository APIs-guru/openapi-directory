# CreateOrUpdateMetaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignored** | **List[str]** |  | [optional] 
**req_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_or_update_meta_response import CreateOrUpdateMetaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateMetaResponse from a JSON string
create_or_update_meta_response_instance = CreateOrUpdateMetaResponse.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateMetaResponse.to_json())

# convert the object into a dict
create_or_update_meta_response_dict = create_or_update_meta_response_instance.to_dict()
# create an instance of CreateOrUpdateMetaResponse from a dict
create_or_update_meta_response_from_dict = CreateOrUpdateMetaResponse.from_dict(create_or_update_meta_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


