# LookupGroupNameResponse

The response message for GroupsService.LookupGroupName.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up &#x60;Group&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lookup_group_name_response import LookupGroupNameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LookupGroupNameResponse from a JSON string
lookup_group_name_response_instance = LookupGroupNameResponse.from_json(json)
# print the JSON string representation of the object
print(LookupGroupNameResponse.to_json())

# convert the object into a dict
lookup_group_name_response_dict = lookup_group_name_response_instance.to_dict()
# create an instance of LookupGroupNameResponse from a dict
lookup_group_name_response_from_dict = LookupGroupNameResponse.from_dict(lookup_group_name_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


