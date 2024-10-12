# TransparentDataEncryptionActivity

Represents a database transparent data encryption Scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**TransparentDataEncryptionActivityProperties**](TransparentDataEncryptionActivityProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transparent_data_encryption_activity import TransparentDataEncryptionActivity

# TODO update the JSON string below
json = "{}"
# create an instance of TransparentDataEncryptionActivity from a JSON string
transparent_data_encryption_activity_instance = TransparentDataEncryptionActivity.from_json(json)
# print the JSON string representation of the object
print(TransparentDataEncryptionActivity.to_json())

# convert the object into a dict
transparent_data_encryption_activity_dict = transparent_data_encryption_activity_instance.to_dict()
# create an instance of TransparentDataEncryptionActivity from a dict
transparent_data_encryption_activity_from_dict = TransparentDataEncryptionActivity.from_dict(transparent_data_encryption_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


