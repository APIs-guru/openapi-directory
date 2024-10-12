# EnumerationValueLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enumeration_set** | **str** |  | [optional] 
**parent** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enumeration_value_links import EnumerationValueLinks

# TODO update the JSON string below
json = "{}"
# create an instance of EnumerationValueLinks from a JSON string
enumeration_value_links_instance = EnumerationValueLinks.from_json(json)
# print the JSON string representation of the object
print(EnumerationValueLinks.to_json())

# convert the object into a dict
enumeration_value_links_dict = enumeration_value_links_instance.to_dict()
# create an instance of EnumerationValueLinks from a dict
enumeration_value_links_from_dict = EnumerationValueLinks.from_dict(enumeration_value_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


