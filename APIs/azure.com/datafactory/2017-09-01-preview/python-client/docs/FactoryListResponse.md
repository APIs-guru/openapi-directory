# FactoryListResponse

A list of factory resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[Factory]**](Factory.md) | List of factories. | 

## Example

```python
from openapi_client.models.factory_list_response import FactoryListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FactoryListResponse from a JSON string
factory_list_response_instance = FactoryListResponse.from_json(json)
# print the JSON string representation of the object
print(FactoryListResponse.to_json())

# convert the object into a dict
factory_list_response_dict = factory_list_response_instance.to_dict()
# create an instance of FactoryListResponse from a dict
factory_list_response_from_dict = FactoryListResponse.from_dict(factory_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


