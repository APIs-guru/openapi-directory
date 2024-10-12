# InfoField

Key-value pairs of instance details in the legacy format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | **str** | Identifies the name of the instance provisioned by the user. | [optional] 

## Example

```python
from openapi_client.models.info_field import InfoField

# TODO update the JSON string below
json = "{}"
# create an instance of InfoField from a JSON string
info_field_instance = InfoField.from_json(json)
# print the JSON string representation of the object
print(InfoField.to_json())

# convert the object into a dict
info_field_dict = info_field_instance.to_dict()
# create an instance of InfoField from a dict
info_field_from_dict = InfoField.from_dict(info_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


