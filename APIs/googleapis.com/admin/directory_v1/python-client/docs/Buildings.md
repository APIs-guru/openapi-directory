# Buildings

Public API: Resources.buildings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildings** | [**List[Building]**](Building.md) | The Buildings in this page of results. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#resources#buildings#buildingsList']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.buildings import Buildings

# TODO update the JSON string below
json = "{}"
# create an instance of Buildings from a JSON string
buildings_instance = Buildings.from_json(json)
# print the JSON string representation of the object
print(Buildings.to_json())

# convert the object into a dict
buildings_dict = buildings_instance.to_dict()
# create an instance of Buildings from a dict
buildings_from_dict = Buildings.from_dict(buildings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


