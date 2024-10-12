# RichText


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**empty** | **bool** |  | [optional] 
**empty_adf** | **bool** |  | [optional] 
**finalised** | **bool** |  | [optional] 
**value_set** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.rich_text import RichText

# TODO update the JSON string below
json = "{}"
# create an instance of RichText from a JSON string
rich_text_instance = RichText.from_json(json)
# print the JSON string representation of the object
print(RichText.to_json())

# convert the object into a dict
rich_text_dict = rich_text_instance.to_dict()
# create an instance of RichText from a dict
rich_text_from_dict = RichText.from_dict(rich_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


