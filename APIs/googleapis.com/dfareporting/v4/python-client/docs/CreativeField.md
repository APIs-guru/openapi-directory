# CreativeField

Contains properties of a creative field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this creative field. This is a read-only field that can be left blank. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this creative field. This is a required field on insertion. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**id** | **str** | ID of this creative field. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creativeField\&quot;. | [optional] 
**name** | **str** | Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this creative field. This is a read-only field that can be left blank. | [optional] 

## Example

```python
from openapi_client.models.creative_field import CreativeField

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeField from a JSON string
creative_field_instance = CreativeField.from_json(json)
# print the JSON string representation of the object
print(CreativeField.to_json())

# convert the object into a dict
creative_field_dict = creative_field_instance.to_dict()
# create an instance of CreativeField from a dict
creative_field_from_dict = CreativeField.from_dict(creative_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


