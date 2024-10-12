# CreateGroupUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**CreateGroupUsingGET200ResponseData**](CreateGroupUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_group_using_get200_response import CreateGroupUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGroupUsingGET200Response from a JSON string
create_group_using_get200_response_instance = CreateGroupUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(CreateGroupUsingGET200Response.to_json())

# convert the object into a dict
create_group_using_get200_response_dict = create_group_using_get200_response_instance.to_dict()
# create an instance of CreateGroupUsingGET200Response from a dict
create_group_using_get200_response_from_dict = CreateGroupUsingGET200Response.from_dict(create_group_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


