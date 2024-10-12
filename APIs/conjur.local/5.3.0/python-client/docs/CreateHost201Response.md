# CreateHost201Response

Contains information about a created host

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **List[str]** |  | 
**api_key** | **str** |  | 
**created_at** | **str** |  | 
**id** | **str** |  | 
**owner** | **str** |  | 
**permissions** | **List[str]** |  | 

## Example

```python
from openapi_client.models.create_host201_response import CreateHost201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateHost201Response from a JSON string
create_host201_response_instance = CreateHost201Response.from_json(json)
# print the JSON string representation of the object
print(CreateHost201Response.to_json())

# convert the object into a dict
create_host201_response_dict = create_host201_response_instance.to_dict()
# create an instance of CreateHost201Response from a dict
create_host201_response_from_dict = CreateHost201Response.from_dict(create_host201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


