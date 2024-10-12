# NameValueDescription

Name/Value pair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | 
**name** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.name_value_description import NameValueDescription

# TODO update the JSON string below
json = "{}"
# create an instance of NameValueDescription from a JSON string
name_value_description_instance = NameValueDescription.from_json(json)
# print the JSON string representation of the object
print(NameValueDescription.to_json())

# convert the object into a dict
name_value_description_dict = name_value_description_instance.to_dict()
# create an instance of NameValueDescription from a dict
name_value_description_from_dict = NameValueDescription.from_dict(name_value_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


