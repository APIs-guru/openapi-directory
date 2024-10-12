# UsagesList200Response

OData page of quota objects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to load the next page of quotas, or null or missing if this is the last page | [optional] 
**value** | [**List[UsagesList200ResponseValueInner]**](UsagesList200ResponseValueInner.md) | List of quotas | [optional] 

## Example

```python
from openapi_client.models.usages_list200_response import UsagesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UsagesList200Response from a JSON string
usages_list200_response_instance = UsagesList200Response.from_json(json)
# print the JSON string representation of the object
print(UsagesList200Response.to_json())

# convert the object into a dict
usages_list200_response_dict = usages_list200_response_instance.to_dict()
# create an instance of UsagesList200Response from a dict
usages_list200_response_from_dict = UsagesList200Response.from_dict(usages_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


