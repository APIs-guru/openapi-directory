# NameValueList

This type is used to provide a name-value pair, including the identifying aspects of a product variation through the variationAspects container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is the name of the variation aspect, or the name of the category of information that is returned through the name-value pair. The type of information that appears here will vary based on the compliance type and type of violation. | [optional] 
**value** | **str** | This is the value of the variation aspect (in name field), or the value of the category of information that is returned through the name-value pair. The type of information that appears here will vary based on the compliance type and type of violation. | [optional] 

## Example

```python
from openapi_client.models.name_value_list import NameValueList

# TODO update the JSON string below
json = "{}"
# create an instance of NameValueList from a JSON string
name_value_list_instance = NameValueList.from_json(json)
# print the JSON string representation of the object
print(NameValueList.to_json())

# convert the object into a dict
name_value_list_dict = name_value_list_instance.to_dict()
# create an instance of NameValueList from a dict
name_value_list_from_dict = NameValueList.from_dict(name_value_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


