# CustomFieldFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the Custom Field | [optional] 
**label** | **str** | Label given to the Custom Field | [optional] 
**type** | **str** | Type of the Custom Field | [optional] 
**values** | **List[str]** | All the possible Values of the Custom Field (for type &#39;selection&#39;) | [optional] 

## Example

```python
from openapi_client.models.custom_field_fields import CustomFieldFields

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldFields from a JSON string
custom_field_fields_instance = CustomFieldFields.from_json(json)
# print the JSON string representation of the object
print(CustomFieldFields.to_json())

# convert the object into a dict
custom_field_fields_dict = custom_field_fields_instance.to_dict()
# create an instance of CustomFieldFields from a dict
custom_field_fields_from_dict = CustomFieldFields.from_dict(custom_field_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


