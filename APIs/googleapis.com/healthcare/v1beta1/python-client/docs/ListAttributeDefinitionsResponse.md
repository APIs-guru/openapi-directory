# ListAttributeDefinitionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_definitions** | [**List[AttributeDefinition]**](AttributeDefinition.md) | The returned Attribute definitions. The maximum number of attributes returned is determined by the value of page_size in the ListAttributeDefinitionsRequest. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_attribute_definitions_response import ListAttributeDefinitionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAttributeDefinitionsResponse from a JSON string
list_attribute_definitions_response_instance = ListAttributeDefinitionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAttributeDefinitionsResponse.to_json())

# convert the object into a dict
list_attribute_definitions_response_dict = list_attribute_definitions_response_instance.to_dict()
# create an instance of ListAttributeDefinitionsResponse from a dict
list_attribute_definitions_response_from_dict = ListAttributeDefinitionsResponse.from_dict(list_attribute_definitions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


