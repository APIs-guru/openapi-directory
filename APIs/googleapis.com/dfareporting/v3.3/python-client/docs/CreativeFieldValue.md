# CreativeFieldValue

Contains properties of a creative field value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this creative field value. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creativeFieldValue\&quot;. | [optional] 
**value** | **str** | Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field. | [optional] 

## Example

```python
from openapi_client.models.creative_field_value import CreativeFieldValue

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeFieldValue from a JSON string
creative_field_value_instance = CreativeFieldValue.from_json(json)
# print the JSON string representation of the object
print(CreativeFieldValue.to_json())

# convert the object into a dict
creative_field_value_dict = creative_field_value_instance.to_dict()
# create an instance of CreativeFieldValue from a dict
creative_field_value_from_dict = CreativeFieldValue.from_dict(creative_field_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


