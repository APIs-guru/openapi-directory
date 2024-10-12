# Webproperties

A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Webproperty]**](Webproperty.md) | A list of web properties. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#webproperties']
**next_link** | **str** | Link to next page for this web property collection. | [optional] 
**previous_link** | **str** | Link to previous page for this web property collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.webproperties import Webproperties

# TODO update the JSON string below
json = "{}"
# create an instance of Webproperties from a JSON string
webproperties_instance = Webproperties.from_json(json)
# print the JSON string representation of the object
print(Webproperties.to_json())

# convert the object into a dict
webproperties_dict = webproperties_instance.to_dict()
# create an instance of Webproperties from a dict
webproperties_from_dict = Webproperties.from_dict(webproperties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


